<script lang="ts">
	import { pb } from '$lib/Services/PocketbaseWrapper';

	let email: string;
	let password: string;

	const login = async () => {
		const authData = await pb.collection('users').authWithPassword(email, password);
		console.log(pb.authStore.isValid);
		console.log(pb.authStore.token);
		console.log(pb.authStore.model.id);
		if (await pb.authStore.isValid) {
			goto('/app/');
		}
	};
</script>

<form class="flex flex-col mx-auto">
	<label>
		Email
		<input type="text" id="email" bind:value={email} />
	</label>
	<label>
		Passwort
		<input type="password" id="password" bind:value={password} />
	</label>
	<button on:click={() => login()}>Absenden</button>
</form>

<button on:click={() => goto('./withEmail/signup')}> Account anlegen </button>
