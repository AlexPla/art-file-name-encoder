<script lang="ts">
  import InputNumber from '../ui/InputNumber.svelte';
  import {type, recordYear, recordNumber} from '../store';
</script>

<InputNumber
  label={`Año del expediente de ${$type === 'T' ? 'entrada' : 'exposición'}`}
  min={0}
  max={999}
  step={1}
  maxLength={3}
  bind:value={$recordYear}
/>
<InputNumber
  label="Número de expediente"
  min={0}
  max={999}
  step={1}
  maxLength={3}
  bind:value={$recordNumber}
/>
