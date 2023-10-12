<script lang="ts">
	import { goto } from '$app/navigation';
	import { pb } from '$lib/Services/PocketbaseWrapper';
	import { onMount } from 'svelte';

	onMount(async () => {
		if (!(await pb.authStore.isValid)) {
			goto('/app/auth');
		}
	});
</script>
