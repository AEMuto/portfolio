<script>
	import Subtitle from '../Subtitle.svelte';
	import Title from '../Title.svelte';
	import FisheyeImg from '/src/assets/images/fisheye_result.webp';
	import ArgentBankImg from '/src/assets/images/argentbank_result.webp';
	import HRnetImg from '/src/assets/images/hrnet_result.webp';
	import ProjectCard from '../ProjectCard.svelte';
	
	const projectsData = [
		{
			id: 1,
			title: 'Fisheye',
			img: FisheyeImg,
			text: 'Une plateforme permettant à des photographes de présenter leurs travaux.',
			tags: ['VanillaJS','OOP','Factory Pattern', 'Accessibility'],
		},
		{
			id: 2,
			title: 'ArgentBank',
			img: ArgentBankImg,
			text: 'Front-end d\'une application web permettant la connexion et la création d\'un utilisateur via l\'usage d\'un JWT.',
			tags: ['React', 'Redux', 'Typescript']
		},
		{
			id: 3,
			title: 'HRnet',
			img: HRnetImg,
			text: 'CRM d\'une entreprise permettant de gérer la création et le suivi de ses employés.',
			tags: ['React', 'Redux', 'Typescript', 'Storybook']
		}
	]
	
</script>

<section class="section">
	<div class="section__wrapper">
		
		<div class="section__column">
			<Title size="medium">
				Mes derniers <br>
				<span class="emphasis">Projets</span>
			</Title>
			
			<div class="section__grid">
				
				{#each projectsData as project}
					<ProjectCard {...project} />
				{/each}
			
			</div>
			
		</div>
	</div>
</section>

<style lang="scss">
	@use '../../assets/scss/mixins' as *;
	
	.section {
		&__wrapper {
			@include section-wrapper;
			grid-template-columns: 1fr;
		}
		
		&__column {
			@include section-column;
		}
		
		&__grid {
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
			place-items: center;
			gap: 2rem;
			margin: 4rem 0;
		}
		
	}

</style>

