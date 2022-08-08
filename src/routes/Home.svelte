<script>
	import About from '../components/sections/About.svelte';
	import Contact from '../components/sections/Contact.svelte';
	import MyProjects from '../components/sections/MyProjects.svelte';
	import Section from '../components/layouts/Section.svelte';
	import Header from '../components/layouts/Header.svelte';

</script>

<Header />

<Section id="about">
	<About/>
</Section>

<Section id="projects">
	<MyProjects/>
</Section>

<Section id="contact">
	<Contact/>
</Section>

<style lang="scss">

</style>
