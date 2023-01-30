<script lang="ts">
  import InputNumber from '../ui/InputNumber.svelte';
  import {uniquePieceIdentifier} from '../store';
  import {onDestroy} from 'svelte';

  onDestroy(() => {
    uniquePieceIdentifier.set('');
  });
</script>

<InputNumber
  label="Identificativo único de la obra"
  min={0}
  step={1}
  bind:value={$uniquePieceIdentifier}
/>
