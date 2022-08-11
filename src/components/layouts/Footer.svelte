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
			<a href="https://github.com/AEMuto/portfolio"
			   class="footer__repo-link">
				Code Source
			</a>
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
	@use '../../assets/scss/variables' as *;
	
	.footer {
		background-color: var(--color__body--brighter);
		height: 6.4rem;
		display: flex;
		justify-content: center;
		
		&__content {
			max-width: 1152px;
			flex: 1;
			display: flex;
			margin: 0 auto;
			justify-content: space-between;
			align-items: center;
			padding: 0 1.6rem;
			p {
				display: flex;
			}
		}
		&__repo-link {
			margin-left: 1rem;
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
