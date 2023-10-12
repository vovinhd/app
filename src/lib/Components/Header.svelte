<script>
	import { page } from '$app/stores';
	import warmingstripes from '$lib/Images/warming_stripes.png';
</script>

<header>
	<button aria-controls="primary-navigation" class="w-8 h-8 px-6 py-4 absolute top-0 left-0">
		<svg class="w-16 h-16" viewBox="0 0 100 100">
			<rect class="line top" width="80" height="10" x="10" y="25" rx="5" />
			<rect class="line middle" width="80" height="10" x="10" y="45" rx="5" />
			<rect class="line bottom" width="80" height="10" x="10" y="65" rx="5" />
		</svg>
	</button>
	<nav />
</header>

<style>
	.line {
		fill: #fff;
		stroke: black;
	}
	header {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	header a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		header {
			padding: 12px 0;
		}
	}
</style>
