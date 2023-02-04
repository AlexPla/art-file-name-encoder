<script lang="ts">
  import InputNumber from '../ui/InputNumber.svelte';
  import {year} from '../stores/store';
</script>

<InputNumber
  label="Año de imagen"
  min={0}
  max={new Date().getFullYear()}
  step={1}
  maxLength={4}
  bind:value={$year}
/>
