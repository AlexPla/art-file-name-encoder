<script context="module">
  let counter = 0
</script>

<script lang="ts">
  export let value: string;
  export let label: string;
  export let placeholder: string = undefined;
  export let step: number = undefined;
  export let max: number = undefined;
  export let min: number = undefined;
  export let maxLength: number;

  let id = `input_number_${counter++}`

  const handleInput = (event: Event) => {
    if (maxLength) {
      event.target.value = event.target.value.slice(0, maxLength);
    }
    value = event.target.value;
  }
</script>



<div>
  {#if label}
    <label for={id}>{label}</label>
  {/if}
  <input type="number" inputmode="numeric" id={id} placeholder={placeholder} step={step} max={max} min={min} on:input={handleInput}/>
</div>

<style>
  div {
    width: 100%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }

  input {
    width: 100%;
    box-sizing: border-box;
  }
</style>