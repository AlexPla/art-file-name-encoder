<script lang="ts">
  import InputNumber from '../ui/InputNumber.svelte';
  import {temporalPieceNumber} from '../store';
  import {onDestroy} from 'svelte';

  onDestroy(() => {
    temporalPieceNumber.set('');
  });
</script>

<InputNumber
  label="Número de orden de la obra dentro del expediente de entrada"
  min={0}
  max={4}
  step={1}
  maxLength={4}
  bind:value={$temporalPieceNumber}
/>
