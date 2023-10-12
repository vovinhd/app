<script>
	import Footer from '$lib/Components/Footer.svelte';
	import Header from '$lib/Components/Header.svelte';
	export let showBottom = false;
</script>

<div class="app">
	<!-- <Header /> -->

	<div class="absolute left-0 top-0 right-0 ws-gradient ws-gradient-top -z-50 w-full" />
	<!--maybe this should NOT live in the header-->
	{#if showBottom}
		<div
			aria-hidden="true"
			class="absolute left-0 bottom-0 right-0 ws-gradient ws-gradient-bottom -z-50"
		/>
	{/if}

	<main>
		<slot />
	</main>

	<!-- <Footer /> -->
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 8rem var(--x-pad, 1.5rem);
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	.ws-gradient {
		background-blend-mode: overlay;
		background-size: 100%;
		background-repeat: inherit;
		--background-color: rgba(255, 255, 255, 1);
		--angle: -12deg;
		height: 16rem;
	}
	.ws-gradient-top {
		background-image: url('/warming_stripes.png'),
			linear-gradient(var(--angle), var(--background-color) 50%, rgba(131, 58, 180, 0) 100%);
	}

	.ws-gradient-bottom {
		background-image: url('/warming_stripes.png'),
			linear-gradient(
				calc(180deg + var(--angle)),
				var(--background-color) 50%,
				rgba(131, 58, 180, 0) 100%
			);
	}
</style>
