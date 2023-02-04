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

<fieldset class="flex flex-col justify-end gap-2">
  {#if label}
    <label for={id}>{label}</label>
  {/if}
  <select
    class="form-select focus:border-red-800 focus:ring-red-800"
    bind:value
    {id}
    {placeholder}
  >
    {#if value === undefined}
      <option value={undefined} disabled selected hidden>{placeholder}</option>
    {/if}
    {#each options as option}
      <option value={option.value}>{option.label}</option>
    {/each}
  </select>
</fieldset>
