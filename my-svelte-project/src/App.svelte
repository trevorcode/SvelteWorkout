<script>
	import Timer from "./Timer.svelte";
	import Workout from "./Workout.svelte";

	// export let name;
</script>

<svelte:head>
	<base href="SvelteWorkout">
</svelte:head>

<main>
	<Timer></Timer>
	<Workout></Workout>
</main>

<style>
	main {
		text-align: center;
		padding: 1rem;
	}


	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>