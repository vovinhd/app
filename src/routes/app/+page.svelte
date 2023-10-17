<script lang="ts">
	import { goto } from '$app/navigation';
	import ClimateFriday from '$lib/Components/ClimateFriday.svelte';
	import FridayCountdown from '$lib/Components/FridayCountdown.svelte';
	import { pb } from '$lib/Services/PocketbaseWrapper';
	import { onMount } from 'svelte';

	onMount(async () => {
		if (!(await pb.authStore.isValid)) {
			goto('/app/auth');
		}
	});
</script>

<main class="flex flex-col gap-4">
	<div>Teilnehmer:innen am letzten Freitag:<br /> 1220</div>

	<div>Aus deinem PLZ-Gebiet waren es<br /> 243</div>

	<FridayCountdown/>
</main>
