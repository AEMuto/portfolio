<script>
	export let size = '2.4rem';
	export let margin = '0 0 0 8rem';
</script>

<h2 style="font-size: {size}; margin: {margin}" class="subtitle">
	<span>
		<slot></slot>
	</span>
</h2>

<style lang="scss">
	.subtitle {
		span {
			background-color: var(--color__accent);
			display: inline-flex;
			padding: .8rem 1.4rem;
			box-decoration-break: clone;
			-webkit-box-decoration-break: clone;
		}
	}
</style>
