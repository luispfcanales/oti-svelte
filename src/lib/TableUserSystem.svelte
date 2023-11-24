<script>
  import { 
    Table,
    TableBody,
    TableBodyCell,
    TableBodyRow,
    TableHead,
    TableHeadCell,
    TableSearch,

    Dropdown,
    DropdownItem,

    Pagination,

    Badge,
  } from 'flowbite-svelte';

  import {
    DotsHorizontalOutline,
    ChevronLeftOutline,
    ChevronRightOutline
  } from 'flowbite-svelte-icons';

  export let items = [];
  export let fnOpenModalDelete;

  let pages = [];

  let searchDataTable = '';
  let limitToRenderTable = 10

  //reactive search filter
  $: filteredItems = items.filter((item) => item.fullname.toLowerCase().indexOf(searchDataTable.toLowerCase()) !== -1);
  $: sizeFilterItems = filteredItems.length

  //reactive pagination
  let pagSize
  function getButtonPagination(index) {
    let listPagination = []
    for(let i=1;i<=index;i++){
      listPagination.push({ name :`${i}`,active:false})
    }
    listPagination[0].active = true
    return  listPagination
  }
  $:{
    if(sizeFilterItems > 0){
      pagSize = filteredItems.length / limitToRenderTable;
      pagSize = Math.ceil(pagSize);
      pages = getButtonPagination(pagSize)
    }else{
      pagSize = 0;
    }
    console.log("debbug pagination: "+pagSize)
  }

</script>

<section>
  <Table>
    <TableSearch 
      placeholder="Ingrese nombre" 
      hoverable={true} 
      bind:inputValue={searchDataTable} 
      divClass="mx-4 mt-5 shadow-md bg-rose-400 rounded-md"
    >
      <TableHead >
        <TableHeadCell>Nro</TableHeadCell>
        <TableHeadCell>Dni</TableHeadCell>
        <TableHeadCell>Email</TableHeadCell>
        <TableHeadCell>Nombre</TableHeadCell>
        <TableHeadCell>Estado</TableHeadCell>
        <TableHeadCell>Rol</TableHeadCell>
        <TableHeadCell>Cargo</TableHeadCell>
        <TableHeadCell>Opciones</TableHeadCell>
      </TableHead>
      <TableBody>
        {#each Array(sizeFilterItems) as _,index (index)}
          <TableBodyRow>
            <TableBodyCell tdClass="px-3 py-2 whitespace-nowrap">{index+1}</TableBodyCell>
            <TableBodyCell tdClass="px-3 py-2 whitespace-nowrap">{filteredItems[index].dni}</TableBodyCell>
            <TableBodyCell tdClass="px-3 py-2 whitespace-nowrap">{filteredItems[index].email}</TableBodyCell>
            <TableBodyCell tdClass="px-3 py-2 whitespace-nowrap">{filteredItems[index].fullname}</TableBodyCell>
            <TableBodyCell tdClass="px-3 py-2 whitespace-nowrap">
              {#if filteredItems[index].state}
                <Badge color={"green"}>Activo</Badge>
              {:else}
                <Badge color={"red"}>Inactivo</Badge>
              {/if}
            </TableBodyCell>
            <TableBodyCell tdClass="px-3 py-2 whitespace-nowrap">{filteredItems[index].role}</TableBodyCell>
            <TableBodyCell tdClass="px-3 py-2 whitespace-nowrap">{filteredItems[index].staff}</TableBodyCell>
            <TableBodyCell tdClass="px-3 py-2 whitespace-nowrap flex justify-center">
              <DotsHorizontalOutline class="text-rose-400"/>
              <Dropdown>
                <DropdownItem>Editar</DropdownItem>
                <DropdownItem on:click={()=>{fnOpenModalDelete(filteredItems[index].dni)}}>
                  Eliminar
                </DropdownItem>
              </Dropdown>
            </TableBodyCell>
          </TableBodyRow>
        {/each}
      </TableBody>

      <svelte:fragment slot="footer">
        {#if sizeFilterItems == 0}
          <h1 class="font-medium text-center p-4 bg-slate-500 rounded text-white">
            No se encontraron resultados!
          </h1>
        {/if}
      </svelte:fragment>

    </TableSearch>
  </Table>

  {#if sizeFilterItems != 0}
    <div class="flex flex-col items-center justify-center gap-2 mt-4">
      <Pagination {pages}>
        <svelte:fragment slot="prev">
          <ChevronLeftOutline class="w-2.5 h-2.5" />
        </svelte:fragment>
        <svelte:fragment slot="next">
          <ChevronRightOutline class="w-2.5 h-2.5" />
        </svelte:fragment>
      </Pagination>
    </div>
  {/if}
</section>
