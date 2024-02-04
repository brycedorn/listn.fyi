<script>
  import Turntable from '../../components/turntable.svelte';

  export let data;

  export let releaseDate =
    data.track &&
    new Date(data.track.album.release_date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

  export let updatedDate =
    data.addedAt &&
    new Date(data.addedAt).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

  let isPlaying = false;

  function onPlay() {
    isPlaying = true;
  }

  function onPause() {
    isPlaying = false;
  }
</script>

<svelte:head>
  {#if data.track}
    <title>{data.title}</title>
    <meta property="og:image" content={data.track.album.images[1].url} />
    <link rel="icon" type="image/png" href={data.track.album.images[1].url} />
    <meta property="og:image" content={data.track.album.images[1].url} />
    <meta name="twitter:image" content={data.track.album.images[1].url} />
  {:else}
    <title>Error for {data.userId}</title>
    <meta property="og:image" content="/favicon.png" />
    <link rel="icon" type="image/png" href="/favicon.png" />
    <meta property="og:image" content="/favicon.png" />
    <meta name="twitter:image" content="/favicon.png" />
  {/if}
</svelte:head>

{#if data.error}
  <center>
    <h1>Error for user: {data.userId}</h1>
    <p>{data.error}</p>
  </center>
{:else if data.track}
  <Turntable {isPlaying} imgSrc={data.track.album.images[1].url} />
  <div id="text">
    <audio controls on:play={onPlay} on:pause={onPause}>
      <source src={data.track.preview_url} type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
    <h1>{data.track.name}</h1>
    <h2>{data.track.artists.map(({ name }) => name).join(', ')}</h2>
    <h3>{data.track.album.name}</h3>
    <p>Released {releaseDate}.</p>
    <p>Listen to the full song on <a href={data.track.external_urls.spotify}>Spotify.</a></p>
    <p><small>Last updated {updatedDate}.</small></p>
  </div>
{/if}
