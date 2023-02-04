<script lang="ts">
  import Select from '../ui/Select.svelte';
  import {imageType} from '../stores/store';
  import type {Option} from '../types/forms';

  const options: Option[] = [
    {value: 'A', label: 'A - Imagen de la obra completa'},
    {value: 'D', label: 'D - Detalle'},
    {value: 'G', label: 'G - Estratigrafía'},
    {value: 'M', label: 'M - Análisis de pigmentos'},
    {value: 'R', label: 'R - Proceso de restauración'},
    {value: 'P', label: 'P - Placa radiológica'},
    {value: 'E', label: 'E - Estudio'},
  ];
</script>

<Select {options} label="Tipo de imagen" bind:value={$imageType} />
