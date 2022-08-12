<script>
	import Button from '../Button.svelte';
	import Subtitle from '../Subtitle.svelte';
</script>

<header class="header">
	<div class="header__wrapper">
		<div class="header__column">
			<Subtitle>Bonjour Interweb!</Subtitle>
			<h1 class="header__title">
				Je m’appelle<br>
				<span>Antoine Marseaud</span>
			</h1>
			<p class="header__info">
				Je suis quelqu'un d'enthousiaste qui aime résoudre des problèmes grâce
				au code. Ma plus grande source de motivation est la construction de
				solutions performantes, élégantes et facile d'utilisation pour tout le
				monde.
			</p>
			<div class="header__cta">
				<a href="/#projects" title="Voir mes projets">
					<Button option="primary">Portfolio</Button>
				</a>
				<a href="/#contact" title="Pour me contacter">
					<Button option="alternate">Me Contacter</Button>
				</a>
			</div>
		</div>
		
		<div class="header__column">
			<img class="header__img"
			     src="/src/assets/images/me.jpg"
			     alt="My Portrait">
		</div>
	</div>
</header>

<style lang="scss">
	@use '../../assets/scss/mixins' as *;
	
	.header {
		&__wrapper {
			@include section-wrapper;
			grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
		}
		
		&__column {
			@include section-column;
			&:nth-of-type(even):before {
				content: '';
				position: absolute;
				top: 0;
				left: 50%;
				width: 100vw;
				height: 100%;
				background-color: var(--color__primary);
				z-index: -1;
			}
		}
		
		&__title {
			font-size: 4.8rem;
			position: relative;
			text-decoration: underline solid 2rem var(--color__accent);
			text-decoration-skip-ink: none;
			text-underline-offset: -.5rem;
			line-height: 1.5;
			
			span {
				color: var(--color__primary);
			}
		}
		
		&__info {
			font-size: 2.4rem;
		}
		
		&__img {
			align-self: center;
			filter: grayscale(100%);
			border-radius: 50%;
			width: 100%;
			max-width: 300px;
			height: auto;
			transition: filter .3s ease-in-out;
			
			&:hover {
				filter: grayscale(0);
			}
		}
		
		&__cta {
			margin-top: 4rem;
		}
		
	}
</style>
