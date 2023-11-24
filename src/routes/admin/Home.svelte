<script>
  import Layout from './Layout.svelte';
  import StateSupport from '../../lib/StateSupport.svelte';
  import Ticket from '../../lib/Ticket.svelte';
  import TableGrid from '../../lib/TableGrid.svelte';
</script>

<Layout>
  <svelte:fragment slot="sectionBody">
    <StateSupport></StateSupport>
    <section class="flex gap-2 flex-wrap justify-center p-3 rounded bg-slate-500 ">
      {#each Array(15) as _, index (index) }
        <Ticket></Ticket>
      {/each}
    </section>
    <section>
    <TableGrid/>
    </section>
  </svelte:fragment>
</Layout>
