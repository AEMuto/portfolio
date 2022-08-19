<script>
	import Subtitle from '../Subtitle.svelte';
	import Title from '../Title.svelte';
	import Button from '../Button.svelte';
</script>

<section class="section">
	<div class="section__wrapper">
		
		<div class="section__column">
			<Title size="medium">
				Mes derniers <br>
				<span class="emphasis">Projets</span>
			</Title>

		

			<div class="section__grid">
				<div class="project__card">
					<div class="project__card__img-container">
						<img src="src/assets/images/fisheye_result.webp" alt="">
					</div>
					<div class="project__card__txt-container">
						<Subtitle margin="0">Fisheye</Subtitle>
						<p>Une plateforme permettant à des photographes de présenter leurs travaux.</p>
						<Button option="alternate">Voir le projet</Button>
					</div>
					
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

	$border-width: .5rem;
	$corner-size: 3rem;
	$dur: .3s;
	
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
			grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
			place-items: center;
			gap: 2rem;
		}
		
		.project__card {
			background-color: var(--color__body--brighter);
			position: relative;
			overflow: hidden;
			display: grid;
			grid-template-rows: repeat(2, 1fr);
			box-shadow: 10px -10px 0px 0px var(--color__body--darker);
			transition: color $dur;
			&__img-container {
				background-color: transparent;
				padding: 2rem;
				position: relative;
				z-index: 2;
				border: $border-width solid var(--color__primary);
				
				&:hover {
					color: pink;
					&::before { width: 0; }
					&::after { height: 0; }
				}
				
				&:active {
					//border-width: calc($border-width / 2);
				}
				
				&::before, &::after {
					content: '';
					position: absolute;
					background: var(--color__body--brighter);
					z-index: -1;
					transition: all $dur;
				}
				//the 101% is because of a pixel rounding issue in firefox
				&::before {
					width: calc(100% - #{$corner-size});
					height: calc(101% + #{$border-width * 2});
					top: -$border-width;
					left: 50%;
					transform: translateX(-50%);
				}
				&::after {
					height: calc(100% - #{$corner-size});
					width: calc(101% + #{$border-width * 2});
					left: -$border-width;
					top: 50%;
					transform: translateY(-50%);
				}
				img {
					width: 100%;
					height: auto;
					filter: drop-shadow(0px 0px 10px var(--color__body--darker));
				}
			}
			&__txt-container {
				padding: 2rem;
				display:flex;
				flex-direction: column;
				justify-content: space-around;
			}
		}
	}

</style>

