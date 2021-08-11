
<h1>Workout #{workoutNumber}</h1>

<div class="workoutText">
    {workout}
</div>

<div class="nextPrevContainer">
    <button on:click="{() => {workoutNumber--; fetchWorkouts()}}">Previous</button>
    <button on:click="{() => {workoutNumber++; fetchWorkouts()}}">Next</button>
</div>

<script>

    let workoutNumber = 1;
    var workout = "";

    function fetchWorkouts() {
        fetch(`workouts/${workoutNumber}.txt`)
        .then(response => response.text())
        .then((data) => {
            workout = data;
        })
    }

    fetchWorkouts();

</script>

<style>
	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 3.25em;
		font-weight: 100;
        margin: 0.5rem 0;
	}

    .workoutText {
        white-space: pre;
    }

    .nextPrevContainer {
        margin-top:0.5rem;
    }
</style>