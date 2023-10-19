<script lang="ts">
	import { goto } from '$app/navigation';
	import BlogEmbed from '$lib/Components/BlogEmbed.svelte';
	import CfButton from '$lib/Components/CFButton.svelte';
	import CfSectionHeading from '$lib/Components/CFSectionHeading.svelte';
	import ClimateFriday from '$lib/Components/ClimateFriday.svelte';
	import FridayCountdown from '$lib/Components/FridayCountdown.svelte';
	import Modal from '$lib/Components/Modal.svelte';
	import ParticipateForm from '$lib/Components/ParticipateForm.svelte';
	import { pb } from '$lib/Services/PocketbaseWrapper';
	import { onMount } from 'svelte';

	onMount(async () => {
		if (!(await pb.authStore.isValid)) {
			goto('/app/auth');
		}
	});


	let setupModal: Modal

	const showModal = () =>  {
		setupModal.show()
	}
</script>

<main class="flex flex-col gap-4">
	<div>Teilnehmer:innen am letzten Freitag:<br /> 1220</div>

	<div>Aus deinem PLZ-Gebiet waren es<br /> 243</div>

	<FridayCountdown/>

	<CfSectionHeading>Mitmachen</CfSectionHeading>



			<ParticipateForm/>



	<BlogEmbed/>
</main>
