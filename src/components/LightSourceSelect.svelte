<script lang="ts">
  import Select from '../ui/Select.svelte';
  import {lightSource} from '../store';
  import type {Option} from '../types/forms';

  const options: Option[] = [
    {value: 'N', label: 'N - Luz Normal'},
    {value: 'X', label: 'X - Rayos X'},
    {value: 'I', label: 'I - Infrarrojo'},
    {value: 'V', label: 'V - Ultravioleta'},
    {value: 'S', label: 'S - Luz Rasante'},
    {value: 'G', label: 'G - Rayos Gamma'},
    {value: 'T', label: 'T - Trasluz'},
    {value: 'P', label: 'P - Polarizada'},
  ];
</script>

<Select {options} label="Fuente de luz" bind:value={$lightSource} />
