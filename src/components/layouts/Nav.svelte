<script>
	import { link, push } from 'svelte-spa-router'
	import ThemeSwitcher from 'svelte-material-icons/Brightness6.svelte'
	
	const switchTheme = () => {
		const root = document.documentElement.dataset
		root.theme = root.theme === 'dark' ? 'light' : 'dark';
	}

</script>

<nav class="nav">
	<div class="nav__content">
		<a class="nav__logo" href="/" title="Accueil" use:link>Antoine M.</a>
		<div class="nav__wrapper">
			<ul class="nav__links">
				<li><a href="#about" title="Quelques mots à propos de moi">À Propos</a>
				</li>
				<li><a href="#projects" title="Mes travaux">Projets</a></li>
				<li><a href="#contact" title="Comment me contacter">Me contacter</a>
				</li>
			</ul>
			<span
						class="theme-switcher"
						title="Changer le thème"
						on:click={switchTheme}
			>
				<ThemeSwitcher size="2rem"/>
			</span>
		</div>
	
	</div>
</nav>

<style lang="scss">
	@use 'sass:color';
	
	.nav {
		height: 6.4rem;
		background-color: var(--color__body--brighter-transparent);
		//opacity: 0.9;
		position: fixed;
		z-index: 1 ;
		width: 100%;
		backdrop-filter: blur(4px);
		top: 0;
		
		&__content {
			display: flex;
			justify-content: space-between;
			align-items: center;
			height: 100%;
			max-width: 1152px;
			margin: 0 auto;
			padding: 0 1.6rem;
		}
		
		&__logo {
			font-family: "ivyjournal", serif;
			font-size: 2.6rem;
			color: var(--color__txt);
			text-decoration: none;
			line-height: 1.5;
			transition: color 0.3s ease-in-out;
			
			&:hover {
				color: var(--color__primary);
			}
		}
		
		&__wrapper {
			display: flex;
			align-items: center;
			height: 100%;
		}
		
		&__links {
			display: flex;
			align-items: center;
			list-style: none;
			height: 100%;
			
			li {
				display: flex;
				align-items: center;
				height: 100%;
				margin: 0 2rem;
				position: relative;
				overflow: hidden;
			}
			
			a {
				font-family: "acumin-pro-wide", monospace;
				font-size: 1.4rem;
				font-weight: 600;
				text-decoration: none;
				text-transform: uppercase;
				transition: color 0.3s ease-in-out;
			}
			
			a:hover {
				color: var(--color__secondary);
				
				&:before {
					transform: translateX(-50%);
					opacity: 1;
				}
			}
			
			a:before {
				content: "";
				opacity: 0;
				position: absolute;
				bottom: 0;
				height: 5px;
				width: 7rem;
				left: 50%;
				transform: translateX(-999px);
				background-color: var(--color__accent);
				transition: transform 0.25s ease-in-out,
											opacity 0.4s ease-in-out;
			}
		}
		
		.theme-switcher {
			cursor: pointer;
			color: var(--color__primary);
			margin-left: 2rem;
			&:hover {
				color: var(--color__secondary);
			}
		}
	}


</style>
