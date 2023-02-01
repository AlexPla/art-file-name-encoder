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

<fieldset class="flex flex-col gap-2 justify-end">
  {#if label}
    <label for={id}>{label}</label>
  {/if}
  <input
    class="form-input focus:border-red-800 focus:ring-red-800"
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
</fieldset>
