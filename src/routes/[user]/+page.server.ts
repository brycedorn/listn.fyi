import { Buffer } from 'node:buffer';
import { CLIENT_ID, CLIENT_SECRET } from '$env/static/private';
// import { dev } from '$app/environment';
import type {
  SpotifyPlaylist,
  SpotifyPlaylistTracksResponse,
  SpotifyUserPlaylistsResponse
} from '$lib/types/api.js';

const authUrl = 'https://accounts.spotify.com/api/token';
const recommendedPlaylistName = 'listn.fyi';

export async function load({ params }) {
  // let accessToken;
  // if (dev) {
  //   accessToken = ACCESS_TOKEN;
  // } else {
  //   accessToken = await fetchClientToken();
  // }
  const accessToken = await fetchClientToken();
  const userId = params.user;

  console.info('Fetching recommended song for user:', userId);
  console.group();

  let playlists;
  try {
    playlists = await fetchUserPlaylists(accessToken, userId);
  } catch (e) {
    if (e instanceof Error) {
      console.error('Fetch playlists: error');
      console.groupEnd();

      return {
        status: 404,
        error: e.message,
        userId
      };
    }
  }

  console.info('Fetch playlists: success!');

  let recommendPlaylist;
  try {
    recommendPlaylist = findRecommendPlaylist(playlists?.items);
  } catch (e) {
    if (e instanceof Error) {
      console.error('Get recommended playlist: error');
      console.groupEnd();

      return {
        status: 404,
        error: e.message,
        userId
      };
    }
  }

  if (recommendPlaylist) {
    const tracks = await fetchPlaylistTracks(accessToken, recommendPlaylist.id);
    const track = tracks.items[0];

    if (!track) {
      console.error('Get track: error');
      console.groupEnd();

      return {
        status: 404,
        error: 'No tracks found in playlist',
        userId
      };
    }

    console.info('Get recommended track: success!');
    console.groupEnd();

    return {
      track: track.track,
      tracks,
      title: `${userId} recommends ${track.track.name} by ${track.track.artists[0].name}`,
      userId,
      addedAt: track.added_at
    };
  }
}

const fetchClientToken = async () => {
  const response = await fetch(authUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Basic ' + Buffer.from(CLIENT_ID + ':' + CLIENT_SECRET).toString('base64')
    },
    body: 'grant_type=client_credentials'
  });

  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }

  const data = await response.json();
  // console.log('Token:', data.access_token);
  return data.access_token;
};

const fetchUserPlaylists = async (
  accessToken: string,
  spotifyUserId: string
): Promise<SpotifyUserPlaylistsResponse> => {
  const playlistsUrl = `https://api.spotify.com/v1/users/${spotifyUserId}/playlists`;
  const response = await fetch(playlistsUrl, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  });

  if (!response.ok) {
    throw new Error(`Error fetching playlists: ${response.status}`);
  }

  const data = await response.json();
  // console.log('User Playlists:', JSON.stringify(data, null, 2));
  return data;
};

const findRecommendPlaylist = (playlists?: SpotifyPlaylist[]): SpotifyPlaylist => {
  const match = playlists?.find(
    (playlist: SpotifyPlaylist) => playlist.name === recommendedPlaylistName
  );

  if (match) {
    return match;
  } else {
    throw new Error(`No playlist found with name: "${recommendedPlaylistName}".`);
  }
};

const fetchPlaylistTracks = async (
  accessToken: string,
  playlistId: string
): Promise<SpotifyPlaylistTracksResponse> => {
  const playlistUrl = `https://api.spotify.com/v1/playlists/${playlistId}/tracks`;
  const response = await fetch(playlistUrl, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  });

  if (!response.ok) {
    throw new Error(`Error fetching playlist tracks: ${response.status}`);
  }

  const data = await response.json();
  // console.log('Playlist Tracks:', JSON.stringify(data, null, 2));
  return data;
};
