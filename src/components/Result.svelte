<script lang="ts">
  import {
    origin,
    type,
    catalogNumber,
    recordYear,
    recordNumber,
    uniqueIdentifier,
    imageType,
    imageNumber,
    lightSource,
    imageView,
    year,
    temporalPieceNumber,
    uniquePieceIdentifier,
  } from '../stores/store';

  let typeValue = '';
  $: typeValue = $type === '-' ? '' : $type;

  let identifier = '';
  $: {
    if ($origin === 'internal') {
      identifier = $catalogNumber;
    } else if ($type === '-') {
      identifier = $uniqueIdentifier;
    } else {
      identifier = `${$recordYear}${$recordNumber}`;
    }
  }

  let externalIdentifier = '';
  $: {
    if ($type === 'T') {
      externalIdentifier = $temporalPieceNumber.padStart(4, '0');
    } else if ($type === 'X') {
      externalIdentifier = `_${$uniquePieceIdentifier}`;
    } else {
      externalIdentifier = '';
    }
  }

  let value = '';
  $: value = `${typeValue}${identifier.padStart(
    7 - typeValue.length,
    '0',
  )}${$imageType}${$imageNumber.padStart(
    2,
    '0',
  )}${$lightSource}${$imageView}${$year.padStart(4, '0')}${externalIdentifier}`;

  let hasBeenCopied = false;
</script>

<section class="mt-16 flex justify-center">
  <div
    class="relative flex flex-col gap-4 border-2 border-red-800 bg-white p-10 shadow-md drop-shadow-md"
  >
    <h2 class="text-xl">{value}</h2>
    <div class="flex justify-center">
      <button
        id="copy-button"
        class="bg-red-800 px-4 py-2 text-sm font-bold text-white"
        type="button"
        on:click={() => {
          navigator.clipboard.writeText(value);
          hasBeenCopied = true;
          setTimeout(() => {
            hasBeenCopied = false;
          }, 2000);
        }}
      >
        COPIAR
      </button>
      {#if hasBeenCopied}
        <div class="absolute top-32 flex justify-center text-sm">
          <span class="text-center">Copiado en el portapapeles</span>
        </div>
      {/if}
    </div>
  </div>
</section>
