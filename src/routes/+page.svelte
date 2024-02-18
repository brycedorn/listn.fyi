<script>
  import Turntable from '../components/turntable.svelte';
</script>

<svelte:head>
  <title>listn.fyi</title>
  <meta name="description" content="Recommend a song to your friends via a Spotify playlist." />
  <meta charset="utf-8" />
  <meta name="author" content="Bryce Dorn" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="theme-color" media="(prefers-color-scheme: light)" content="#eee" />
  <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#222" />
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-status-bar-style" content="#222" />
  <link rel="icon" type="image/png" href="/favicon.png" />
  <meta property="og:title" content="listn.fyi" />
  <meta property="og:description" content="listn.fyi" />
  <meta property="og:image" content="/favicon.png" />
  <meta property="og:url" content="https://listn.fyi" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="listn.fyi" />
  <meta property="og:locale" content="en_US" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="listn.fyi" />
  <meta name="twitter:description" content="listn.fyi" />
  <meta name="twitter:image" content="/favicon.png" />
  <meta name="twitter:url" content="https://listn.fyi" />
  <meta name="twitter:domain" content="listn.fyi" />
</svelte:head>

<center>
  <div id="splash-turntable">
    <Turntable />
  </div>
  <div id="info">
    <h1>listn.fyi</h1>
    <ul>
      <li>Make a public playlist on Spotify with the name <b>"listn.fyi"</b> (no quotes).</li>
      <li>Add a song you'd recommend to it.</li>
      <li>
        Go to the URL for your Spotify username, e.g. <a href="https://listn.fyi/combatfetus"
          >listn.fyi/combatfetus</a
        >.
      </li>
    </ul>
    <p>
      Share this link anywhere! Twitter bio, blog, etc. Playlist changes will immediately reflect
      here.
    </p>
  </div>
</center>

<style>
  #info {
    max-width: 80%;
  }

  ul {
    text-align: left;
    margin: 12px 0;
  }

  li {
    list-style-type: lower-roman;
    padding: 4px;
  }

  p {
    padding: 12px;
    text-wrap: pretty;
  }

  #splash-turntable {
    transform: scale(0.8);
    height: 0;
    margin: -100px;
    position: relative;
    top: -250px;
  }

  @media (min-width: 700px) {
    #splash-turntable {
      transform: scale(0.4);
    }
  }
</style>
