

<div>
    <label for="workoutTime">Workout</label>
    <input id="workoutTime" bind:value={workoutTime} type="number" />
</div>
<div>
    <label for="cooldownTime">Cooldown</label>
    <input id="cooldownTime" bind:value={cooldownTime} type="number" />
</div>
<div class="timerContainer">
<span class="timer" on:click={startTimer}>
    {time.toFixed(2)}
</span>
</div>
<!-- <button on:click={startTimer}>
    {#if timerState != timerStates.WAITING}
        Stop
    {:else}
        Start
    {/if}
</button> -->

<script>
    const timerStates = {
        WAITING: "waiting",
        WORKOUT: "workout",
        COOLDOWN: "cooldown",
    };

    var workoutTime = 40;
    var time = 40;
    var cooldownTime = 20;

    var timerState = timerStates.WAITING;

    var intervalTimer = null;

    function startTimer() {
        time = workoutTime;

        if (timerState != timerStates.WAITING) {
            clearInterval(intervalTimer);
            intervalTimer = null;
            timerState = timerStates.WAITING;
            return;
        }

        timerState = timerState.WORKOUT;

        intervalTimer = setInterval(function () {
            time -= 0.05;
            if (time <= 0) {
                if (
                    timerState == timerStates.WAITING ||
                    timerState == timerStates.COOLDOWN
                ) {
                    time = workoutTime;
                    timerState = timerStates.WORKOUT;
                } else {
                    time = cooldownTime;
                    timerState = timerStates.COOLDOWN;
                }
            }
        }, 50);
    }
</script>

<style>
    .timerContainer {
        display:flex;
        align-items: center;
        justify-content: center;
    }
    .timer {
        border-radius: 50%;
        width: 200px;
        height: 200px;
        background-color: #ff3e00;
        text-transform: uppercase;
        font-size: 4em;
        font-weight: 100;
        cursor: pointer;
        color: White;
        display:flex;
        flex-direction: column;
        justify-content: center;
    }
    .timer:hover {
        background-color: #ff6532;
    }

    input, label {
        display:inline-block;
    }
</style>
