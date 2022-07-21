<script lang="ts">
	import Linkedin from 'svelte-material-icons/Linkedin.svelte';
	import Github from 'svelte-material-icons/Github.svelte';
	import Email from 'svelte-material-icons/EmailVariant.svelte';
	
	const year = new Date().getFullYear();
	const size = '3rem';
</script>

<footer class="footer">
	<div class="footer__content">
		<p>
			&copy; Antoine Marseaud {year}
			<a href="https://github.com/AEMuto/portfolio">Source Code</a>
		</p>
		<p>
			<a href="mailto:antoine.marseaud@gmail.com"
			   class="footer__social-icon">
				<Email {size}/>
			</a>
			<a href="https://www.linkedin.com/in/antoine-marseaud/"
			   target="_blank"
			   class="footer__social-icon">
				<Linkedin {size}/>
			</a>
			<a href="https://github.com/AEMuto"
			   target="_blank"
			   class="footer__social-icon">
				<Github {size}/>
			</a>
		</p>
	</div>
</footer>

<style lang="scss">
	@use '../styles/colors' as *;
	
	.footer {
		background-color: $white;
		height: 6.4rem;
		display: flex;
		max-width: 1152px;
		&__content {
			flex: 1;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0 1.6rem;
			p {
				display: flex;
			}
		}
		&__social-icon {
			display: flex;
			align-items: center;
			justify-content: center;
			height: 4rem;
			width: 4rem;
		}
	}
</style>
