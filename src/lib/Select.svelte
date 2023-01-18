<script context="module">
  let counter = 0
</script>
<script lang="ts">
  export let value;
  export let options: { value: string, label: string }[];
  export let label: string;
  export let placeholder: string;

  let id = `select_${counter++}`

  const change = (event: Event) => {
    value = event.target.value;
  }
</script>

<div>
  {#if label}
    <label for={id}>{label}</label>
  {/if}
  <select id={id} placeholder={placeholder} on:change={change}>
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