<script>

</script>

<header class="header">
	<div>
		<h2 class="header__sub"><span>Bonjour Interweb!</span></h2>
		<h1 class="header__title">
			Je m’appelle<br>
			<span>Antoine Marseaud</span>
		</h1>
		<p class="header__info">
			Je suis quelqu'un d'enthousiaste qui aime résoudre des problèmes grâce au
			code. Ma plus grande source de motivation est la construction de solutions
			performantes, élégantes et facile d'utilisation pour tout le monde.
		</p>
		<button>Portfolio</button>
		<button>Me Contacter</button>
	</div>
	
	<div class="img__wrapper">
		<img class="img"
		     src="/src/assets/images/me.jpg"
		     alt="My Portrait">
	</div>
</header>

<section class="section"></section>
<section class="section"></section>
<section class="section"></section>

<style lang="scss">
	@use '../assets/scss/mixins' as *;
	
	.header {
		@include page;
		max-width: 1152px;
		margin: 0 auto;
		padding: 0 1.6rem;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
		place-items: center;
		&:before {
			content: '';
			position: absolute;
			top: 0;
			right: 0;
			width: calc(100%/3);
			height: 100%;
			background-color: var(--color__primary);
			z-index: -1;
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
		
		&__sub {
			font-size: 2.4rem;
			margin-left: 8rem;
			span {
				background-color: var(--color__accent);
				display: inline;
				padding: .8rem 1.4rem;
				box-decoration-break: clone;
				-webkit-box-decoration-break: clone;
			}
		}
		&__info {
			font-size: 2.4rem;
		}
		.img__wrapper {
			background-color: var(--color__primary);
			position: relative;
			display: block;
			border-radius: 1rem;
			width: 100%;
			max-width: 300px;
			
			&:hover {
				.img {
					filter: none;
					mix-blend-mode: normal;
				}
				&:before {
					opacity: 0;
				}
			}
			
			.img {
				filter: grayscale(100%) contrast(1) brightness(1.2);
				mix-blend-mode: multiply;
				border-radius: 1rem;
				width: 100%;
				position: relative;
				transition: all .3s ease-in-out;
			}
			
			&:before, &:after {
				content: '';
				display: block;
				position: absolute;
				width: 100%;
				height: 100%;
				border-radius: 1rem;
				
			}
			
			&:before {
				top: 0;
				left: 0;
				background-color: var(--color__primary);
				mix-blend-mode: screen;
				//opacity: 0.5;
				z-index: 1;
				transition: opacity 0.5s ease;
			}
			&:after {
				bottom: 10px;
				left: 10px;
				border: solid 3px var(--color__primary);
				z-index: -1;
			}
		}
	}
</style>
