<script lang="ts">
	import { goto } from '$app/navigation';
	import ClimateFriday from '$lib/Components/ClimateFriday.svelte';
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

	<div>
		Noch 3 Tage 5 Stunden 26 Minuten und 32 Sekunden Bis zum nächsten <br /><ClimateFriday />
	</div>
</main>
