<script>
  import { Timeline, TimelineItem } from 'flowbite-svelte';
  import { 
    AnnotationSolid,
    UserGroupSolid,
    CogOutline,
    CheckCircleSolid,
    FilePenOutline,
  } from 'flowbite-svelte-icons';

  const styleDivIconHorizontal = "flex z-10 justify-center items-center w-7 h-7 bg-green-300 rounded-full ring-0 ring-white dark:bg-primary-900 sm:ring-8 dark:ring-gray-900 shrink-0"
  const styleDivIconVertical = "flex absolute -left-3 justify-center items-center w-7 h-7 bg-green-300 rounded-full ring-8 ring-white"
  const styleIcon = "w-4 h-4 text-green-600 dark:text-primary-400"
  const lineProgres="hidden sm:flex w-full bg-green-400 h-0.5 dark:bg-gray-700" 

  let sizewidth = 0;
  function isHorizontal(size) {
    return size > 500 
  }
  function screemDisplay(size) {
    if (isHorizontal(size)){
      return "horizontal"
    }
    return "vertical"
  }
</script>

<svelte:window bind:innerWidth={sizewidth}/>
<section class="bg-slate-100 p-4 rounded m-4">
  <Timeline order={screemDisplay(sizewidth)}>

    <TimelineItem title="Solicitud de soporte" date="20-11-2023 13:03 p.m.">
      <svelte:fragment slot="icon" >
        {#if sizewidth > 500}
          <div class="flex items-center">
            <div class={styleDivIconHorizontal}>
              <AnnotationSolid class={styleIcon} />
            </div>
            <div class={lineProgres} />
          </div>
        {:else} 
          <span class={styleDivIconVertical}>
              <AnnotationSolid class={styleIcon} />
          </span>
        {/if}
      </svelte:fragment>
      <p class="text-base font-normal text-gray-500 dark:text-gray-400 pr-4">
        El personal revisara y aceptara su solicitud.
      </p>
    </TimelineItem>

    <TimelineItem title="Seleccion de Personal" date="20-11-2023 13:03 p.m.">
      <svelte:fragment slot="icon">
        {#if isHorizontal(sizewidth)}
          <div class="flex items-center">
            <div class={styleDivIconHorizontal}>
              <UserGroupSolid class={styleIcon} />
            </div>
            <div class={lineProgres} />
          </div>
        {:else}
          <span class={styleDivIconVertical}>
              <UserGroupSolid class={styleIcon} />
          </span>
        {/if}
      </svelte:fragment>
      <p class="text-base font-normal text-gray-500 dark:text-gray-400 pr-4">
        Proceso de seleccion de personal para atencion.
      </p>
    </TimelineItem>

    <TimelineItem title="Atencion en proceso" date="20-11-2023 13:03 p.m.">
      <svelte:fragment slot="icon">
        {#if isHorizontal(sizewidth)}
          <div class="flex items-center">
            <div class={styleDivIconHorizontal}>
              <CogOutline class={styleIcon} />
            </div>
            <div class={lineProgres} />
          </div>
        {:else}
          <span class={styleDivIconVertical}>
              <CogOutline class={styleIcon} />
          </span>
        {/if}
      </svelte:fragment>
      <p class="text-base font-normal text-gray-500 dark:text-gray-400 pr-4">
        El personal realiza la atencion solicitada.
      </p>
    </TimelineItem>

    <TimelineItem title="Atencion finalizada" date="20-11-2023 13:03 p.m.">
      <svelte:fragment slot="icon">
        {#if isHorizontal(sizewidth)}
          <div class="flex items-center">
            <div class={styleDivIconHorizontal}>
              <CheckCircleSolid class={styleIcon} />
            </div>
            <div class={lineProgres} />
          </div>
        {:else}
          <span class={styleDivIconVertical}>
              <CheckCircleSolid class={styleIcon} />
          </span>
        {/if}
      </svelte:fragment>
      <p class="text-base font-normal text-gray-500 dark:text-gray-400 pr-4">
        Se realizo la atencion solicitada.
      </p>
    </TimelineItem>

    <TimelineItem title="Conformidad de servicio" date="20-11-2023 13:03 p.m.">
      <svelte:fragment slot="icon">
        {#if isHorizontal(sizewidth)}
          <div class="flex items-center">
            <div class={styleDivIconHorizontal}>
              <FilePenOutline class={styleIcon} />
            </div>
            <div class={lineProgres} />
          </div>
        {:else}
          <span class={styleDivIconVertical}>
              <FilePenOutline class={styleIcon} />
          </span>
        {/if}
      </svelte:fragment>
      <p class="text-base font-normal text-gray-500 dark:text-gray-400 pr-4">
        Se realizo la atencion solicitada.
      </p>
    </TimelineItem>
  </Timeline>

</section>
