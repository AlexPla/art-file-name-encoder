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
  } from '../store';

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

<section class="result">
  <h2>{value}</h2>
  <div class="tooltip-container">
    <button
      id="copy-button"
      type="button"
      on:click={() => {
        navigator.clipboard.writeText(value);
        hasBeenCopied = true;
        setTimeout(() => {
          hasBeenCopied = false;
        }, 2000);
      }}
    >
      Copiar
    </button>
    {#if hasBeenCopied}
      <div class="tooltip">
        <span>Copiado en el portapapeles</span>
      </div>
    {/if}
  </div>
</section>
