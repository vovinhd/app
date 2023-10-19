<script lang="ts">
	import { slugify } from '$lib/Util';
	import Modal from './Modal.svelte';

    let gratulateModal: Modal

    let submitting = false;
	let selectedOption = '';
    let note: string | undefined = undefined;
	const options: { value: string | undefined; label: string }[] = [
		{
			value: 'banner',
			label: 'Mit Banner'
		},
		{
			value: 'window_foil',
			label: 'Mit Fensterfolie'
		},
		{
			value: 'button',
			label: 'Mit Button'
		},
		{
			value: 'sticker',
			label: 'Mit Sticker'
		},
		{
			value: 'flag',
			label: 'Mit Fähnchen'
		},
		{
			value: undefined,
			label: 'Leider gar nicht'
		}
	];
    
    const submit = () => {

    }
</script>

<form class="flex flex-col gap-4 max-w-4xl">
	<fieldset class="flex flex-col gap-4">
		<legend class="pb-4">Wie machst du heute beim Climate Friday mit?</legend>
		<div style="grid-template-columns: 1fr 1rem;" class="grid grid-flow-row gap-2">
			{#each options as { value, label }}
				<label for={slugify(label)}>{label}</label>
				<input id={slugify(label)} type="radio" name={label} {value} bind:group={selectedOption} />
			{/each}
		</div>
		<div class="form-control w-full max-w-xs">
			<label class="label px-0 pb-" for="note">
				<span class="label-text">Notiz</span>
			</label>
			<input
				placeholder="Notiz zu diesem Freitag"
				class="input input-bordered w-full max-w-xs"
				type="text"
				id="note"
				bind:value={note}
			/>
		</div>

	</fieldset>
    <div class="flex flex-row justify-end w-full">
        <button
		class="
            px-8
            py-4
            transition-all
            hover:duration-250
            active:duration-100
            font-semibold
            font-serif
            rounded-lg
            bg-primary-200 hover:bg-primary-300 text-primary-900
            active:text-opacity-80 active:scale-[0.98] active:translate-y-0.5
            "
		type="submit"
		on:click|preventDefault={() => {gratulateModal.show()}}>Abschicken</button
	>
    </div>

</form>


<Modal bind:this={gratulateModal}>
    <div>
        <span>Hurray</span>
    </div>
</Modal>