<script lang="ts">
    export let opacity = 1.0; 
</script>

<div style="--opacity: {opacity}" class="absolute left-0 top-0 right-0 ws-gradient ws-gradient-top -z-50 w-full" />

<style lang="scss">
    .ws-gradient {
        opacity: var(--opacity, 1.0);
		background-blend-mode: overlay;
		background-size: 100%;
		background-repeat: inherit;
		--background-color: rgba(255, 255, 255, 1);
		--angle: -12deg;
		height: 20rem;
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

