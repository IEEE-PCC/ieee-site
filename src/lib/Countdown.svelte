<script>
	import { onMount } from 'svelte';

	let { targetDate } = $props();

	let cDate = new Date(targetDate).getTime(); // Change to your target date
	let timeLeft = $state(getTimeLeft());
	let animate = $state(false);

	function getTimeLeft() {
		const now = new Date().getTime();
		const difference = cDate - now;

		if (difference <= 0) {
			return { days: 0, hours: 0, minutes: 0, seconds: 0 };
		}

		return {
			days: Math.floor(difference / (1000 * 60 * 60 * 24)),
			hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
			minutes: Math.floor((difference / (1000 * 60)) % 60),
			seconds: Math.floor((difference / 1000) % 60)
		};
	}

	onMount(() => {
		const interval = setInterval(() => {
			timeLeft = getTimeLeft();
			animate = true;

			setTimeout(() => {
				animate = false;
			}, 200); // Reset animation after 200ms
		}, 1000);

		return () => clearInterval(interval);
	});
</script>

<div class="flex flex-col items-center justify-center bg-gray-900 text-xl text-white">
	<div class="font-mono">
		<span class={animate ? 'animate-glow' : ''}>{timeLeft.days}</span>d
		<span class={animate ? 'animate-glow' : ''}>{timeLeft.hours}</span>h
		<span class={animate ? 'animate-glow' : ''}>{timeLeft.minutes}</span>m
		<span class={animate ? 'animate-glow' : ''}>{timeLeft.seconds}</span>s
	</div>
</div>

<style>
	@keyframes glow {
		0% {
			text-shadow:
				0 0 5px red,
				0 0 10px red,
				0 0 15px red;
		}
		100% {
			text-shadow: none;
		}
	}

	.animate-glow {
		animation: glow 0.2s ease-in-out;
	}
</style>
