<script>
	import { link, push } from 'svelte-spa-router'
</script>

<nav class="nav">
	<div class="nav__content">
		<a class="nav__logo" href="/" use:link><span>A</span></a>
		<ul class="nav__links">
			<li><a href="#about" >01.À Propos</a></li>
			<li><a href="#projects">02.Projets</a></li>
			<li><a href="#contact">03.Me contacter</a></li>
		</ul>
	</div>
</nav>

<style lang="scss">
	@use '../../assets/scss/variables' as *;
	
	.nav {
		height: 6.4rem;
		background-color: $clr__body--brighter;
		position: fixed;
		width: 100%;
		backdrop-filter: blur(3px);
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
			font-family: "space-mono", monospace;
			font-size: 2.4rem;
			line-height: 1.5;
			border-radius: 50%;
			text-decoration: none;
			width: 4rem;
			height: 4rem;
			background-color: transparent;
			color: $clr__txt;
			border: solid 2px $clr__txt;
			display: flex;
			
			span {
				margin: auto;
			}
		}
		
		&__links {
			display: flex;
			list-style: none;
			li:nth-child(even){
				margin: 0 0.8rem;
			}
			a {
				font-family: "space-mono", monospace;
				font-size: 1.4rem;
				font-weight: 700;
				text-decoration: none;
			}
		}
	}


</style>
