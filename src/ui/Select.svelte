<script context="module">
  let counter = 0;
</script>

<script lang="ts">
  export let value: string;
  export let options: {value: string; label: string}[];
  export let label: string;
  export let placeholder: string = 'Seleccione una opción';

  let id = `select_${counter++}`;
</script>

<div>
  {#if label}
    <label for={id}>{label}</label>
  {/if}
  <select bind:value {id} {placeholder}>
    {#if value === undefined}
      <option value={undefined} disabled selected hidden>{placeholder}</option>
    {/if}
    {#each options as option}
      <option value={option.value}>{option.label}</option>
    {/each}
  </select>
</div>

<style>
  div {
    width: 100%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }

  select {
    width: 100%;
  }
</style>
