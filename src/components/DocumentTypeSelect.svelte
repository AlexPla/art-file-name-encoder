<script lang="ts">
  import {onDestroy} from 'svelte';
  import Select from '../ui/Select.svelte';
  import type {Option} from '../types/forms';
  import {origin, type} from '../stores/store';

  const allOptions: (Option & {type: 'external' | 'internal'})[] = [
    {value: 'P', label: 'P - Colección Pintura', type: 'internal'},
    {value: 'E', label: 'E - Colección Escultura', type: 'internal'},
    {value: 'D', label: 'D - Colección Dibujo', type: 'internal'},
    {value: 'G', label: 'G - Colección Grabado', type: 'internal'},
    {value: 'O', label: 'O - Colección Artes Decorativas', type: 'internal'},
    {value: 'F', label: 'F - Colección Fragmento', type: 'internal'},
    {value: 'OD', label: 'OD - Colección Documento', type: 'internal'},
    {
      value: 'HF',
      label: 'HF - Colección Fotografía Histórica',
      type: 'internal',
    },
    {value: 'M', label: 'M - Colección de Marcos', type: 'internal'},
    {value: 'L', label: 'L - Colección de Marcos', type: 'internal'},
    {value: 'I', label: 'I - Colección Otros Inventarios', type: 'internal'},
    {
      value: 'A',
      label: 'A - Colección Elementos arquitectónicos',
      type: 'internal',
    },
    {value: 'T', label: 'T - Entradas Temporales', type: 'external'},
    {value: 'X', label: 'X - Documentación de colecciones', type: 'external'},
    {value: '-', label: 'Obras sin expedientes', type: 'external'},
  ];
  $: options = allOptions.filter(({type}) => type === $origin);

  const subscription = origin.subscribe(value =>
    type.set(value === 'internal' ? 'P' : 'T'),
  );
  onDestroy(subscription);
</script>

<Select {options} label="Tipo de documento gráfico" bind:value={$type} />
