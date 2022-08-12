<script lang="ts">

import Button from '../Button.svelte';
</script>

<section class="section">
	<div class="section__wrapper">

			<Button option="primary">Me Contacter</Button>

	</div>
</section>

<style lang="scss">
	@use '../../assets/scss/mixins' as *;
	
	.section {
		&__wrapper {
			@include section-wrapper;
			place-items: center;
		}

	}

</style>

