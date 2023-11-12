<script>
  import { BottomNav, BottomNavItem,Dropdown, DropdownItem } from 'flowbite-svelte';
  import { HomeOutline, ShieldCheckOutline, AdjustmentsVerticalOutline, UsersGroupOutline, ComputerSpeakerOutline } from 'flowbite-svelte-icons';
  import {push} from "svelte-spa-router"

  const StyleIcons="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500 outline-none"
  const routeAdmin = "/admin"
</script>

<BottomNav
  outerClass="w-full z-10 border-gray-200 dark:bg-gray-700 dark:border-gray-600"
  classInner="grid-cols-5"
  navType="application"
>
  <BottomNavItem btnName="Acessos">
    <ShieldCheckOutline class={StyleIcons} />
  </BottomNavItem>
  <Dropdown>
    <DropdownItem on:click={()=>{push(`${routeAdmin}/roles-privilegios`)}}>Roles y privilegios</DropdownItem>
    <DropdownItem on:click={()=>{push(`${routeAdmin}/usuarios`)}}>Usuarios de sistema</DropdownItem>
  </Dropdown>

  <BottomNavItem btnName="Mantenimiento">
    <AdjustmentsVerticalOutline class={StyleIcons} />
  </BottomNavItem>
  <Dropdown>
    <DropdownItem on:click={()=>{push("/sedes")}}>Sedes</DropdownItem>
    <DropdownItem on:click={()=>{push("/dependencias")}}>Dependencias</DropdownItem>
  </Dropdown>

  <BottomNavItem btnName="Inicio"  on:click={()=>{push(`${routeAdmin}`)}}>
    <HomeOutline class={StyleIcons}/>
  </BottomNavItem>

  <BottomNavItem btnName="Personas">
    <UsersGroupOutline class={StyleIcons} />
  </BottomNavItem>
  <Dropdown>
    <DropdownItem on:click={()=>{push("/datos-personales")}}>Datos personales</DropdownItem>
    <DropdownItem on:click={()=>{push("/empleados")}}>Empleados</DropdownItem>
  </Dropdown>

  <BottomNavItem btnName="Equipos">
    <ComputerSpeakerOutline class={StyleIcons} />
  </BottomNavItem>
  <Dropdown>
    <DropdownItem on:click={()=>{push("/equipos-conectados")}}>En linea</DropdownItem>
    <DropdownItem on:click={()=>{push("/equipos-registrados")}}>Registrados</DropdownItem>
  </Dropdown>
</BottomNav>
