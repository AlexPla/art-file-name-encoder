<script lang="ts">
  import {origin, type} from './store';
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

<header>
  <h1>Codificador de nombres de archivos</h1>
</header>
<main>
  <form>
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
    <br />
    <Result />
  </form>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  form {
    max-width: 300px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
  }

  .result {
    place-items: center;
    padding: 1rem;
    background-color: maroon;
    border-radius: 1rem;
    border: 1px solid white;
  }

  .tooltip-container {
    position: relative;
  }

  .tooltip {
    position: absolute;
    top: -150%;
    padding: 1rem;
    border-radius: 1rem;
    background-color: white;
    color: #242424;
  }

  .tooltip::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: white transparent transparent transparent;
  }
</style>
