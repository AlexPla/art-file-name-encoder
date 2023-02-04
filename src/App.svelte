<script lang="ts">
  import {origin, type} from './stores/store';
  import OriginSelector from './components/OriginRadioSelector.svelte';
  import DocumentTypeSelect from './components/DocumentTypeSelect.svelte';
  import CatalogNumberInput from './components/CatalogNumberInput.svelte';
  import UniqueIdentifierInput from './components/UniqueIdentifierInput.svelte';
  import RecordDataInputs from './components/RecordDataInputs.svelte';
  import ImageTypeSelect from './components/ImageTypeSelect.svelte';
  import ImageNumberInput from './components/ImageNumberInput.svelte';
  import LightSourceSelect from './components/LightSourceSelect.svelte';
  import ImageViewSelect from './components/ImageViewSelect.svelte';
  import YearInput from './components/YearInput.svelte';
  import TemporalPieceNumberInput from './components/TemporalPieceNumberInput.svelte';
  import UniquePieceIdentifierInput from './components/UniquePieceIdentifierInput.svelte';
  import Result from './components/Result.svelte';
</script>

<header class="flex justify-center border-b border-gray-300 p-4">
  <h1 class="text-center text-3xl uppercase text-gray-800">
    Codificador de nombres de archivos
  </h1>
</header>
<main class="bg-gray-100 py-8 text-gray-800">
  <form
    class="mx-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4"
  >
    <OriginSelector />
    <DocumentTypeSelect />
    {#if $origin === 'internal'}
      <CatalogNumberInput />
    {:else if $type === '-'}
      <UniqueIdentifierInput />
    {:else}
      <RecordDataInputs />
    {/if}
    <ImageTypeSelect />
    <ImageNumberInput />
    <LightSourceSelect />
    <ImageViewSelect />
    <YearInput />
    {#if $origin === 'external'}
      {#if $type === 'T'}
        <TemporalPieceNumberInput />
      {:else if $type === 'X'}
        <UniquePieceIdentifierInput />
      {/if}
    {/if}
  </form>
  <Result />
</main>
