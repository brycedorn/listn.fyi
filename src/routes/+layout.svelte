<script>
  import SvelteLogo from '$lib/images/svelte.svelte';
  import Deno from '$lib/images/deno.svelte';
  import Codepen from '$lib/images/codepen.svelte';
  import Github from '$lib/images/github.svelte';
  import './styles.css';
</script>

<div class="app">
  <header>
    Create your own! Make a public playlist on Spotify with the name "lstnto" and add a song to it.
    Your shareable URL is lstnto.deno.dev/your-username.
  </header>
  <main>
    <slot />
  </main>

  <footer>
    <p>Built with</p>
    <a href="https://kit.svelte.dev">
      <SvelteLogo />
    </a>
    <p>and</p>
    <a href="https://deno.com/">
      <Deno />
    </a>
    <div class="spacer" />
    <p>Source:</p>
    <a href="https://github.com/brycedorn/lstnto">
      <Github />
    </a>
    <div class="spacer" />
    <p>CSS record player:</p>
    <a href="https://codepen.io/robrehrig/pen/AooLxK">
      <Codepen />
    </a>
  </footer>
</div>

<style>
  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    width: 100%;
    max-width: 64rem;
    margin: 0 auto;
    box-sizing: border-box;
  }

  header,
  footer {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 24px;
  }

  footer a {
    width: 16px;
    margin: 4px;
  }

  .spacer {
    width: 6px;
  }

  @media (min-width: 480px) {
    footer {
      padding: 12px 0;
    }
  }
</style>
