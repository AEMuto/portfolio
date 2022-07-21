<nav class="nav">
	<div class="nav__content">
		<a class="nav__logo" href="#/"><span>A</span></a>
		<ul class="nav__links">
			<li><a href="#/about">01. À Propos</a></li>
			<li><a href="#/projects">02. Projets</a></li>
			<li><a href="#/contact">03. Me contacter</a></li>
		</ul>
	</div>
</nav>

<style lang="scss">
	@use '../styles/colors' as *;
	
	.nav {
		height: 6.4rem;
		background-color: change-color($white, $alpha: 0.9);
		position: fixed;
		width: 100%;
		backdrop-filter: blur(3px);
		top:0;
		
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
			font-family: "serifa", serif;
			font-size: 2rem;
			border-radius: 50%;
			font-weight: 700;
			text-decoration: none;
			width: 4rem;
			height: 4rem;
			background-color: transparent;
			color: $black;
			border: solid 3px $black;
			display: flex;
			
			span {
				margin: auto;
			}
		}
		
		&__links {
			display: flex;
			list-style: none;
		}
	}


</style>
