<script>
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
  <meta name="description" content="Recommending one song at a time" />
  {#if data.track}
    <title>{data.title}</title>
    <meta property="og:image" content={data.track.album.images[1].url} />
    <link rel="icon" type="image/png" href={data.track.album.images[1].url} />
  {:else}
    <title>Error</title>
    <meta property="og:image" content="/favicon.png" />
    <link rel="icon" type="image/png" href="/favicon.png" />
  {/if}
</svelte:head>

{#if data.error}
  <center>
    <h1>Error</h1>
    <p>{data.error}</p>
  </center>
{:else if data.track}
  <div
    id="turntable"
    style={isPlaying ? '--animation-play-state: running' : '--animation-play-state: paused'}
  >
    <div id="turntable-inner">
      <div id="table-shadow" />
      <div id="table-feet" />
      <div id="wood">
        <div id="grain1" />
        <div id="grain2" />
        <div id="grain3" />
        <div id="grain4" />
        <div id="grain5" />
        <div id="grain6" />
      </div>
      <div id="wood2">
        <div id="grain7" />
        <div id="grain8" />
        <div id="grain9" />
        <div id="grain10" />
        <div id="grain11" />
      </div>
      <div id="table" />
      <div id="button" />
      <div id="disk">
        <div id="label">
          <img src={data.track.album.images[1].url} alt="Album cover" />
        </div>
      </div>
      <div id="needle">
        <div id="axis-shadow" />
        <div id="axis" />
        <div id="axis-surround" />
        <div id="arm-shadow" />
        <div id="weight-shadow" />
        <div id="base">
          <div id="axle-shadow" />
        </div>
        <div id="lever" />
        <div id="weight" />
        <div id="axle" />
        <div id="arm" />
        <div id="head" />
      </div>
    </div>
    <div id="vert-spacer" />
  </div>
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
