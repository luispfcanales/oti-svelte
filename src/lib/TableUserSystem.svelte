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
    PaginationItem,

    Badge,
  } from 'flowbite-svelte';

  import {
    DotsHorizontalOutline,
    ChevronLeftOutline,
    ChevronRightOutline
  } from 'flowbite-svelte-icons';

  export let items = [];
  export let fnOpenModalDelete;

  //limitToRenderTable default limit 10
  export let limitToRenderTable = 10 

  let searchDataTable = '';

  //pagination index init-end
  let initRender = 0;
  let endRender = limitToRenderTable;

  //resize with change filteredItems
  $: auxToRenderRows = limitToRenderTable

  //reactive search filter
  $: filteredItems = items.filter((item) => item.fullname.toLowerCase().indexOf(searchDataTable.toLowerCase()) !== -1);
  $: sizeFilterItems = filteredItems.length

  //reactive pagination
  let paginationSize
  let ListPagination = [];
  let currentPagination = 1;
  $: reactivePagination = ListPagination;
  $:{
    ListPagination = []
    if(sizeFilterItems > 0){
      paginationSize = filteredItems.length / limitToRenderTable;
      paginationSize = Math.ceil(paginationSize);
      //create new ListPagination with search word
      for(let i=0;i<paginationSize;i++){
        ListPagination.push({value:i+1,active:false})
        //active current pagination
        if(currentPagination-1 == i ){
          ListPagination[i].active = true;
        }
      }
    }else{
      paginationSize = 0;
    }
  }

  //render size rows
  $:{
    if(sizeFilterItems < limitToRenderTable) {
      auxToRenderRows = sizeFilterItems;
    }else{
      auxToRenderRows = limitToRenderTable;
    }
  }

  //HANDLERS PAGINATION
  //handle Click
  function handleRenderRowsByPagination(index){
    endRender = limitToRenderTable * index;
    initRender = endRender - limitToRenderTable;
    currentPagination = index;
    activePagination(index)
  }
  //hadle active pagination efect
  function activePagination(index){
    for(let i=0;i<paginationSize;i++){
      reactivePagination[i].active = false;
    }
    reactivePagination[index-1].active = true;
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
        <TableHeadCell>Dni</TableHeadCell>
        <TableHeadCell>Email</TableHeadCell>
        <TableHeadCell>Nombre</TableHeadCell>
        <TableHeadCell>Estado</TableHeadCell>
        <TableHeadCell>Rol</TableHeadCell>
        <TableHeadCell>Cargo</TableHeadCell>
        <TableHeadCell>Opciones</TableHeadCell>
      </TableHead>
      <TableBody>
        {#each filteredItems as item,index (index)}
          {#if index >= initRender && index < endRender }
            <TableBodyRow>
              <TableBodyCell tdClass="px-3 py-2 whitespace-nowrap">{item.dni}</TableBodyCell>
              <TableBodyCell tdClass="px-3 py-2 whitespace-nowrap">{item.email}</TableBodyCell>
              <TableBodyCell tdClass="px-3 py-2 whitespace-nowrap">{item.fullname}</TableBodyCell>
              <TableBodyCell tdClass="px-3 py-2 whitespace-nowrap">
                {#if item.state}
                  <Badge color={"green"}>Activo</Badge>
                {:else}
                  <Badge color={"red"}>Inactivo</Badge>
                {/if}
              </TableBodyCell>
              <TableBodyCell tdClass="px-3 py-2 whitespace-nowrap">{item.role}</TableBodyCell>
              <TableBodyCell tdClass="px-3 py-2 whitespace-nowrap">{item.staff}</TableBodyCell>
              <TableBodyCell tdClass="px-3 py-2 whitespace-nowrap flex justify-center">
                <DotsHorizontalOutline class="text-rose-400"/>
                <Dropdown>
                  <DropdownItem>Editar</DropdownItem>
                  <DropdownItem on:click={()=>{fnOpenModalDelete(item.dni)}}>
                    Eliminar
                  </DropdownItem>
                </Dropdown>
              </TableBodyCell>
            </TableBodyRow>
          {/if}
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
    <div class="flex items-center justify-center mt-4">
      <PaginationItem class="flex items-center rounded-none">
        <ChevronLeftOutline class="w-2.5 h-2.5" />
      </PaginationItem>
      {#each reactivePagination as item,index (index) }
        <PaginationItem
          active={item.active}
          class="flex rounded-none items-center w-8"
          on:click={()=>handleRenderRowsByPagination( item.value )}
        >
          {item.value}
        </PaginationItem>
      {/each}
      <PaginationItem class="flex rounded-none items-center">
        <ChevronRightOutline class="w-2.5 h-2.5" />
      </PaginationItem>
    </div>
  {/if}
</section>
