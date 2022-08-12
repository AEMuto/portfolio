<script lang="ts">
	type option = "primary" | "alternate"
	export let option:option;
</script>

<button class={`btn btn--${option}`}>
	<slot></slot>
</button>

<style lang="scss">
	.btn {
		font-size: 2.1rem;
		padding: 1rem 1.6rem;
		border-radius: .5rem;
		border: solid 2px var(--color__txt);
		cursor: pointer;
		margin-right: 2rem;
		
		&--primary {
			border: solid 2px var(--color__primary);
			background-color: var(--color__primary);
			color: var(--color__body);
			
			&:hover {
				background-color: var(--color__accent);
			}
		}
		
		&--alternate {
			border: solid 2px var(--color__primary);
			background-color: var(--color__body);
			color: var(--color__primary);
			
			&:hover {
				background-color: var(--color__primary);
			}
		}
	}
</style>
