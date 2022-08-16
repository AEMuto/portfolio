<script>
	import Subtitle from '../Subtitle.svelte';
	import Title from '../Title.svelte';
</script>

<section class="section">
	<div class="section__wrapper">
		<div class="section__column">
			<Title size="medium">
				Mes derniers <br>
				<span class="emphasis">Projets</span>
			</Title>
		</div>
		
		<div class="section__column">
			<div class="section__grid">
				<div class="project__card">
					<Subtitle margin="0">Fisheye</Subtitle>
				</div>
				<div class="project__card">
					<Subtitle margin="0">Argentbank</Subtitle>
				</div>
				<div class="project__card">
					<Subtitle margin="0">HRnet</Subtitle>
				</div>
				
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
			grid-template-rows: 1fr 2fr;
		}
		
		&__column {
			@include section-column;
		}
		
		&__grid {
			flex: 1;
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
			gap: 2rem;
		}
		.project__card {
			background-color: var(--color__body--brighter);
			padding: 1rem;
			position: relative;
			&:before {
				content: '';
				position: absolute;
				top: -1rem;
				left: 1rem;
				width: 100%;
				height: 100%;
				background-color: var(--color__body--darker);
				z-index: -1;
			}
		}
	}

</style>

