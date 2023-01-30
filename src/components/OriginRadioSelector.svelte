<script lang="ts">
  import {origin} from '../store';
  import type {Option} from '../types/forms';
  import Radio from '../ui/Radio.svelte';

  const options: Option[] = [
    {value: 'internal', label: 'Interna'},
    {value: 'external', label: 'Externa'},
  ];

  const handleChange = (event: Event) => {
    origin.set((event.target as HTMLInputElement).value);
  };
</script>

<Radio
  value={$origin}
  onChange={handleChange}
  id="origin"
  {options}
  legend="Origen de la obra:"
/>
