<script lang="ts">
	import Router from 'svelte-spa-router';
	import routes from "./routes";
	import Nav from './components/layouts/Nav.svelte';
	import Footer from './components/layouts/Footer.svelte';
</script>

<Nav/>
<main>
	<Router {routes} />
</main>
<Footer/>

<style lang="scss">
	main {
		margin-top: 6.4rem;
		min-height: calc(100vh - 12.8rem);
	}

</style>
