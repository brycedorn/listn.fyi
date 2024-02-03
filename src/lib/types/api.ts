interface PlaylistOwner {
  display_name: string;
  external_urls: SpotifyExternalUrls;
  href: string;
  id: string;
  type: string;
  uri: string;
}

interface PlaylistTrackInfo {
  href: string;
  total: number;
}

export interface SpotifyPlaylist {
  collaborative: boolean;
  description: string;
  external_urls: SpotifyExternalUrls;
  href: string;
  id: string;
  images: SpotifyImage[];
  name: string;
  owner: PlaylistOwner;
  primary_color: null | string;
  public: boolean;
  snapshot_id: string;
  tracks: PlaylistTrackInfo;
  type: string;
  uri: string;
}

export interface SpotifyUserPlaylistsResponse {
  href: string;
  items: SpotifyPlaylist[];
  limit: number;
  next: null | string;
  offset: number;
  previous: null | string;
  total: number;
}

interface SpotifyExternalUrls {
  spotify: string;
}

interface SpotifyTrack {
  album: SpotifyAlbum;
  artists: SpotifyArtist[];
  available_markets: string[];
  external_urls: SpotifyExternalUrls;
  href: string;
  id: string;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
}

interface SpotifyAlbum {
  album_type: string;
  artists: SpotifyArtist[];
  available_markets: string[];
  external_urls: SpotifyExternalUrls;
  href: string;
  id: string;
  images: SpotifyImage[];
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: string;
  uri: string;
}

interface SpotifyArtist {
  external_urls: SpotifyExternalUrls;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

interface SpotifyImage {
  height: number;
  url: string;
  width: number;
}

interface SpotifyTrack {
  album: SpotifyAlbum;
  artists: SpotifyArtist[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  episode: boolean;
  explicit: boolean;
  external_ids: { isrc: string };
  external_urls: SpotifyExternalUrls;
  href: string;
  id: string;
  is_local: boolean;
  name: string;
  popularity: number;
  preview_url: string;
  track: boolean;
  track_number: number;
  type: string;
  uri: string;
}

interface SpotifyPlaylistTrack {
  added_at: string;
  added_by: {
    external_urls: SpotifyExternalUrls;
    href: string;
    id: string;
    type: string;
    uri: string;
  };
  is_local: boolean;
  primary_color: null | string;
  track: SpotifyTrack;
  video_thumbnail: { url: null | string };
}

export interface SpotifyPlaylistTracksResponse {
  href: string;
  items: SpotifyPlaylistTrack[];
  limit: number;
  next: null | string;
  offset: number;
  previous: null | string;
  total: number;
}
