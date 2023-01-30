<script context="module">
  let counter = 0;
</script>

<script lang="ts">
  export let value: string;
  export let label: string | undefined = undefined;
  export let step: number | undefined = undefined;
  export let max: number | undefined = undefined;
  export let min: number | undefined = undefined;
  export let maxLength: number | undefined = undefined;
  export let placeholder: string = '0';

  $: placeholder = '0'.repeat(maxLength ?? 1);

  let id = `input_number_${counter++}`;

  const handleInput = (event: Event) => {
    if (maxLength) {
      (event.target as HTMLInputElement).value = (
        event.target as HTMLInputElement
      ).value.slice(0, maxLength);
    }
    value = (event.target as HTMLInputElement).value;
  };

  let inputField: HTMLInputElement;
  $: if (inputField) inputField.value = value;
</script>

<div>
  {#if label}
    <label for={id}>{label}</label>
  {/if}
  <input
    type="number"
    inputmode="numeric"
    {id}
    {placeholder}
    {step}
    {max}
    {min}
    bind:this={inputField}
    on:input={handleInput}
  />
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
