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

<fieldset class="felx-col flex justify-end" on:change={onChange}>
  {#if legend}
    <legend>{legend}</legend>
  {/if}
  <div class="w-full">
    {#each options as option}
      <div>
        <input
          class="form-radio text-red-800 focus:border-0 focus:ring-0"
          type="radio"
          id={option.value}
          name={id}
          value={option.value}
          checked={value === option.value}
        />
        <label for={option.value}>{option.label}</label>
      </div>
    {/each}
  </div>
</fieldset>
