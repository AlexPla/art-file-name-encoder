<script lang="ts">
  export let value: string;
  export let id: string;
  export let legend: string | undefined = undefined;
  export let options: {value: string; label: string}[];
  export let onChange: (event: Event) => void;

  const handleChange = (event: Event) => {
    const target = event.target as HTMLInputElement;
    value = target.value;
  };
</script>

<fieldset on:change={onChange}>
  {#if legend}
    <legend>{legend}</legend>
  {/if}
  {#each options as option}
    <div>
      <input
        type="radio"
        id={option.value}
        name={id}
        value={option.value}
        checked={value === option.value}
      />
      <label for={option.value}>{option.label}</label>
    </div>
  {/each}
</fieldset>

<style>
  fieldset {
    width: 100%;
    display: flex;
    box-sizing: border-box;
    gap: 2rem;
    border: none;
    padding: 0;
    margin: 0;
  }

  legend {
    text-align: left;
  }

  fieldset > div {
    display: flex;
    align-items: baseline;
    gap: 0.25rem;
  }
</style>
