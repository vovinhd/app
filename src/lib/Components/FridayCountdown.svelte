<script lang="ts">
	import ClimateFriday from './ClimateFriday.svelte';
	import { timeToNextFriday } from '$lib/Services/TimerStore';

    let days: number, hours: number, minutes: number, seconds: number;
    $: days = $timeToNextFriday.days || 0
    $: hours = $timeToNextFriday.hours || 0
    $: minutes = $timeToNextFriday.minutes || 0
    $: seconds = Math.floor($timeToNextFriday.seconds || 0)
</script>

<div>
	Noch {days} Tage {hours} Stunden {minutes} Minuten und {seconds} Sekunden Bis zum nächsten <ClimateFriday
	/>
</div>
