<script lang="ts">
  import InputNumber from '../ui/InputNumber.svelte';
  import {imageNumber} from '../store';
</script>

<InputNumber
  label="Número de imagen"
  min={0}
  max={99}
  step={1}
  maxLength={2}
  bind:value={$imageNumber}
/>
