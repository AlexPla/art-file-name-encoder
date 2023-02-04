<script lang="ts">
  import Select from '../ui/Select.svelte';
  import {imageView} from '../stores/store';
  import type {Option} from '../types/forms';

  const options: Option[] = [
    {value: 'F', label: 'F - Frontal'},
    {value: 'E', label: 'E - Posterior'},
    {value: 'Z', label: 'Z - Lateral izquierdo'},
    {value: 'C', label: 'C - Lateral derecho'},
    {value: 'T', label: 'T - Superior'},
    {value: 'B', label: 'B - Inferior'},
  ];
</script>

<Select {options} label="Vista de la imagen" bind:value={$imageView} />
