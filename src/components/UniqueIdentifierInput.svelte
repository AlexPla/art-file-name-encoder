<script lang="ts">
  import InputNumber from '../ui/InputNumber.svelte';
  import {uniqueIdentifier} from '../stores/store';
</script>

<InputNumber
  label="Identificativo único de la obra"
  min={0}
  max={9999999}
  step={1}
  maxLength={7}
  bind:value={$uniqueIdentifier}
/>
