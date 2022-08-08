<header class="header">
	<div class="content">
		<h1 class="title">Antoine Marseaud</h1>
		<p>This is the home page.</p>
	</div>
</header>

<style lang="scss">
	@use '../../assets/scss/mixins' as *;
	
	.header {
		@include container;
	}
	
	.content {
		@include content;
	}
	
	.title {
		font-family: space-mono, monospace;
		font-weight: 400;
	}

</style>
