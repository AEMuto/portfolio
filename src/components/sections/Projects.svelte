<script>

</script>

<section class="section">
	<div class="section__wrapper">
		<div class="section__column">
			Projet 01
		</div>
		<div class="section__column">
			Projet 02
		</div>
		<div class="section__column">
			Projet 03
		</div>
	</div>
</section>

<style lang="scss">
	@use '../../assets/scss/mixins' as *;
	
	.section {
		&__wrapper {
			@include section-wrapper;
			grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
		}
		&__column {
			@include section-column;
		}
	}

</style>

