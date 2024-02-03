<script>
  import SvelteLogo from '$lib/images/svelte.svelte';
  import Deno from '$lib/images/deno.svelte';
  import Codepen from '$lib/images/codepen.svelte';
  import Github from '$lib/images/github.svelte';
  import './styles.css';
</script>

<div class="app">
  <header>
    <p>
      <small
        >Create your own! Make a public playlist on Spotify with the name <b>"lstnto"</b> and add a
        song to it. Your shareable URL is
        <b><a href="https://lstnto.deno.dev/your-username">lstnto.deno.dev/your-username</a></b
        >.</small
      >
    </p>
  </header>
  <main>
    <slot />
  </main>

  <footer>
    <div class="section">
      <p>Built with</p>
      <a href="https://kit.svelte.dev">
        <SvelteLogo width={20} />
      </a>
      <p>and</p>
      <a href="https://deno.com/">
        <Deno width={20} />
      </a>
    </div>
    <div>
      <div class="section">
        <p>Source</p>
        <a href="https://github.com/brycedorn/lstnto">
          <Github width={20} />
        </a>
      </div>
      <div class="section">
        <p>CSS record player</p>
        <a href="https://codepen.io/robrehrig/pen/AooLxK">
          <Codepen width={20} />
        </a>
      </div>
    </div>
  </footer>
</div>

<style>
  .app {
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow: hidden;
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

  footer {
    flex-wrap: wrap;
  }

  footer p {
    margin: 0;
  }

  footer div {
    display: flex;
    align-items: center;
    margin: 0 2px;
  }

  footer div a {
    margin: 4px;
    white-space: nowrap;
  }

  @media (min-width: 480px) {
    footer {
      padding: 12px 0;
    }
  }
</style>
