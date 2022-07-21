<script lang="ts">
import Router from 'svelte-spa-router';
import routes from "./routes";
import Nav from './components/Nav.svelte';
import Footer from './components/Footer.svelte';
</script>

<Nav />
<main>
	<Router {routes}/>
</main>
<Footer />

<style lang="scss">
	
  main {
    margin-top: 6.4rem;
	  min-height: 100vh;
	}
 
</style>
