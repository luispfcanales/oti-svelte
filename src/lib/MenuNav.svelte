<script>
  import { BottomNav, BottomNavItem,Dropdown, DropdownItem } from 'flowbite-svelte';
  import { ShieldCheckOutline, AdjustmentsVerticalOutline, UsersGroupOutline, ComputerSpeakerOutline } from 'flowbite-svelte-icons';
  import {push} from "svelte-spa-router"
</script>

<BottomNav classInner="grid-cols-4">
  <BottomNavItem btnName="Acessos">
    <ShieldCheckOutline class="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500" />
  </BottomNavItem>
  <Dropdown>
    <DropdownItem on:click={()=>{push("/roles-privilegios")}}>Roles y privilegios</DropdownItem>
    <DropdownItem>Usuarios de sistema</DropdownItem>
  </Dropdown>

  <BottomNavItem btnName="Mantenimiento">
    <AdjustmentsVerticalOutline class="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500" />
  </BottomNavItem>
  <Dropdown>
    <DropdownItem on:click={()=>{push("/sedes")}}>Sedes</DropdownItem>
    <DropdownItem on:click={()=>{push("/dependencias")}}>Dependencias</DropdownItem>
  </Dropdown>

  <BottomNavItem btnName="Personas">
    <UsersGroupOutline class="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500" />
  </BottomNavItem>
  <Dropdown>
    <DropdownItem on:click={()=>{push("/datos-personales")}}>Datos personales</DropdownItem>
    <DropdownItem on:click={()=>{push("/empleados")}}>Empleados</DropdownItem>
  </Dropdown>

  <BottomNavItem btnName="Equipos">
    <ComputerSpeakerOutline class="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500" />
  </BottomNavItem>
  <Dropdown>
    <DropdownItem on:click={()=>{push("/equipos-conectados")}}>En linea</DropdownItem>
    <DropdownItem on:click={()=>{push("/equipos-registrados")}}>Registrados</DropdownItem>
  </Dropdown>
</BottomNav>
