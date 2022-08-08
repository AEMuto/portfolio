<script>
	export let id;
</script>

<section class="section" id={id}>
	<slot></slot>
</section>

<style lang="scss">
	@use '../../assets/scss/mixins' as *;
	
	.section {
		@include container;
	}

</style>
