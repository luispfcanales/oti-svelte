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
  } from 'flowbite-svelte';
  import {CogOutline} from 'flowbite-svelte-icons';

  import fakedata from "../../lib/fakedata.js"

   let helper = { start: 1, end: 10, total: 100 };

  let searchTerm = '';
  let items = fakedata
  $: filteredItems = items.filter((item) => item.fullname.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
</script>
<Table >
<TableSearch placeholder="Ingrese nombre" hoverable={true} bind:inputValue={searchTerm} divClass="mx-4 mt-20 shadow-md bg-rose-400 rounded-md">
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
    {#each filteredItems as item , numberIndex}
      <TableBodyRow>
        <TableBodyCell tdClass="px-3 py-2 whitespace-nowrap">{numberIndex+1}</TableBodyCell>
        <TableBodyCell tdClass="px-3 py-2 whitespace-nowrap">{item.dni}</TableBodyCell>
        <TableBodyCell tdClass="px-3 py-2 whitespace-nowrap">{item.email}</TableBodyCell>
        <TableBodyCell tdClass="px-3 py-2 whitespace-nowrap">{item.fullname}</TableBodyCell>
        <TableBodyCell tdClass="px-3 py-2 whitespace-nowrap">{item.state}</TableBodyCell>
        <TableBodyCell tdClass="px-3 py-2 whitespace-nowrap">{item.role}</TableBodyCell>
        <TableBodyCell tdClass="px-3 py-2 whitespace-nowrap">{item.staff}</TableBodyCell>
        <TableBodyCell tdClass="px-3 py-2 whitespace-nowrap flex justify-center">
          <CogOutline class="text-rose-400"/>
          <Dropdown>
            <DropdownItem>Editar</DropdownItem>
            <DropdownItem>Eliminar</DropdownItem>
          </Dropdown>
        </TableBodyCell>
      </TableBodyRow>
    {/each}
  </TableBody>
</TableSearch>
</Table>

<div class="flex flex-col items-center justify-center gap-2 mt-4">
  <div class="text-sm text-gray-700 dark:text-gray-400">
    Showing <span class="font-semibold text-gray-900 text-white">{helper.start}</span>
    to
    <span class="font-semibold text-gray-900 dark:text-white">{helper.end}</span>
    of
    <span class="font-semibold text-gray-900 dark:text-white">{helper.total}</span>
    Entries
  </div>

  <Pagination table>
    <span slot="prev">Prev</span>
  </Pagination>
</div>
