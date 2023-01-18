<script lang="ts">
  import Select from './lib/Select.svelte'
  import InputNumber from './lib/InputNumber.svelte'

  const collectionOtions: { value: string, label: string }[] = [
    { value: 'P', label: 'P - Colección Pintura'},
    { value: 'E', label: 'E - Colección Escultura'},
    { value: 'D', label: 'D - Colección Dibujo'},
    { value: 'G', label: 'G - Colección Grabado'},
    { value: 'O', label: 'O - Colección Artes Decorativas'},
    { value: 'F', label: 'F - Colección Fragmento'},
    { value: 'OD', label: 'OD - Colección Documento'},
    { value: 'HF', label: 'HF - Colección Fotografía Histórica'},
    { value: 'M', label: 'M - Colección de Marcos'},
    { value: 'L', label: 'L - Colección de Marcos'},
    { value: 'I', label: 'I - Colección Otros Inventarios'},
    { value: 'A', label: 'A - Colección Elementos arquitectónicos'},
  ]
  const imageTypeOptions: { value: string, label: string }[] = [
    { value: 'A', label: 'A - Imagen de la obra completa'},
    { value: 'D', label: 'D - Detalle'},
    { value: 'G', label: 'G - Estratigrafía'},
    { value: 'M', label: 'M - Análisis de pigmentos'},
    { value: 'R', label: 'R - Proceso de restauración'},
    { value: 'P', label: 'P - Placa radiológica'},
    { value: 'E', label: 'E - Estudio'},
  ]
  const lightSourceOptions: { value: string, label: string }[] = [
    { value: 'N', label: 'N - Luz Normal' },
    { value: 'X', label: 'X - Rayos X' },
    { value: 'I', label: 'I - Infrarrojo' },
    { value: 'V', label: 'V - Ultravioleta' },
    { value: 'S', label: 'S - Luz Rasante' },
    { value: 'G', label: 'G - Rayos Gamma' },
    { value: 'T', label: 'T - Trasluz' },
    { value: 'P', label: 'P - Polarizada' },
  ]
  const imageViewOptions: { value: string, label: string }[] = [
    { value: 'F', label: 'F - Frontal' },
    { value: 'E', label: 'E - Posterior' },
    { value: 'Z', label: 'Z - Lateral izquierdo' },
    { value: 'C', label: 'C - Lateral derecho' },
    { value: 'T', label: 'T - Superior' },
    { value: 'B', label: 'B - Inferior' },
  ]
  let collection = 'P'
  let catalogNumber = ''
  let imageType = 'A'
  let imageNumber = ''
  let lightSource = 'N'
  let imageView = 'F'
  let year = ''

  $: (value = `${collection}${catalogNumber.padStart(6, '0')}${imageType}${imageNumber.padStart(2, '0')}${lightSource}${imageView}${year.padStart(4, '0')}`)
</script>

<header>
  <h1>Codificador de nombres de archivos</h1>
</header>
<main>
  <form>
    <Select options={collectionOtions} label="Tipo de documento gráfico" bind:value={collection} />
    <InputNumber label="Número de catálogo" min=0 max=999999 step=1 maxLength=6 bind:value={catalogNumber}/>
    <Select options={imageTypeOptions} label="Tipo de imagen" bind:value={imageType} />
    <InputNumber label="Número de imagen" min=0 max=99 step=1 maxLength=2 bind:value={imageNumber}/>
    <Select options={lightSourceOptions} label="Fuente de luz" bind:value={lightSource} />
    <Select options={imageViewOptions} label="Vista de la imagen" bind:value={imageView} />
    <InputNumber label="Año de imagen" min=0 max={(new Date()).getFullYear()} step=1 maxLength=4 bind:value={year}/>
    
    <br /><br />
    <h2>Resultado: {value}</h2>
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
</style>