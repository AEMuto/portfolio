<script lang="ts">
	type size = 'big' | 'medium' | 'small';
	export let size:size = 'medium';
	
	const sizeSwitch = (size) => {
		switch (size) {
			case 'big':
				return (`font-size: 4.8rem;
								margin-bottom: 4rem;
								text-decoration-thickness: 2rem;
								text-underline-offset: -.5rem;
								line-height: 1.4;`)
			case 'medium':
				return (`font-size: 3.6rem;
								margin-bottom: 3rem;
								text-decoration-thickness: 1.5rem;
								text-underline-offset: -.375rem;
								line-height: 1.3;`)
			case 'small':
				return (`font-size: 2.7rem;
								margin-bottom: 2.25rem;
								text-decoration-thickness: 1.125rem;
								text-underline-offset: -.28125rem;
								line-height: 1.2;`);
			default:
				throw new Error('Invalid Size Prop for Title component');
		}
	}
	
</script>

<h1 style={sizeSwitch(size)} class="title">
		<slot></slot>
</h1>

<style lang="scss">
	.title {
		//text-decoration: underline solid 2rem var(--color__accent);
		text-decoration-line: underline;
		text-decoration-style: solid;
		text-decoration-thickness: 2rem;
		text-decoration-color: var(--color__accent);
		text-decoration-skip-ink: none;
		text-underline-offset: -.5rem;
		line-height: 1.5;
	}
</style>
