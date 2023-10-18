<script lang="ts">
	import CfHeading from "$lib/Components/CFHeading.svelte";
	import CfSectionHeading from "$lib/Components/CFSectionHeading.svelte";
	import { currentUser, pb } from "$lib/Services/PocketbaseWrapper";
	import { onMount } from "svelte";

    let participations: Participation[] = []

    onMount(async() => {
        participations = await pb.collection("participations").getFullList({batch:20})
        console.log($currentUser)
        console.log(participations)
    })
</script>
<div>
    <CfSectionHeading>Highlights</CfSectionHeading>
    
</div>
<div>
    <CfHeading>Verlauf</CfHeading>

    {#each participations as participation}
    <div>
        <div>Option: {participation.option}</div>
        <div>Note: {participation.note}</div>
        <div>Weeknumber: {participation.weeknumber}</div>
        <div>date: {participation.date}</div>
    </div>
    {/each}
</div>
