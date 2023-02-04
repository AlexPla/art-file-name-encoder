<script lang="ts">
  import {get} from 'svelte/store';
  import InputNumber from '../ui/InputNumber.svelte';
  import {type, catalogNumber} from '../stores/store';

  catalogNumber.set('');

  type.subscribe(value => {
    if (7 - value.length > get(catalogNumber).length) return;
    catalogNumber.set(get(catalogNumber).slice(0, 7 - value.length));
  });
</script>

<InputNumber
  label="Número de catálogo"
  min={0}
  max={Math.pow(10, 7 - $type.length) - 1}
  step={1}
  maxLength={7 - $type.length}
  bind:value={$catalogNumber}
/>
