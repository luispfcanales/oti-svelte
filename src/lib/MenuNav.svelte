<script>
  import { BottomNav, BottomNavItem,Dropdown, DropdownItem } from 'flowbite-svelte';
  import { HomeOutline, ShieldCheckOutline, AdjustmentsVerticalOutline, UsersGroupOutline, ComputerSpeakerOutline } from 'flowbite-svelte-icons';
  import {push} from "svelte-spa-router"

  const StyleIcons="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500 outline-none"
  const routeAdmin = "/admin"

  let innerWidth=0//letter 700
  const BtnName = ["Accesos", "Mantenimiento", "Inicio" , "Personas" , "Equipos"]

  function GetNameButton(index,width) {
    if (width <= 500) {
      return ""
    }

    return BtnName[index]
  }
</script>

<svelte:window bind:innerWidth/>
<BottomNav
  outerClass="w-full z-10 border-gray-200 dark:bg-gray-700 dark:border-gray-600"
  classInner="grid-cols-5"
>
  <BottomNavItem btnName="{GetNameButton(0,innerWidth)}">
    <ShieldCheckOutline class={StyleIcons} />
  </BottomNavItem>
  <Dropdown>
    <DropdownItem on:click={()=>{push(`${routeAdmin}/roles-privilegios`)}}>Roles y privilegios</DropdownItem>
    <DropdownItem on:click={()=>{push(`${routeAdmin}/usuarios`)}}>Usuarios de sistema</DropdownItem>
  </Dropdown>

  <BottomNavItem btnName="{GetNameButton(1,innerWidth)}">
    <AdjustmentsVerticalOutline class={StyleIcons} />
  </BottomNavItem>
  <Dropdown>
    <DropdownItem on:click={()=>{push("/sedes")}}>Sedes</DropdownItem>
    <DropdownItem on:click={()=>{push("/dependencias")}}>Dependencias</DropdownItem>
  </Dropdown>

  <BottomNavItem btnName="{GetNameButton(2,innerWidth)}"  on:click={()=>{push(`${routeAdmin}`)}}>
    <HomeOutline class={StyleIcons}/>
  </BottomNavItem>

  <BottomNavItem btnName="{GetNameButton(3,innerWidth)}">
    <UsersGroupOutline class={StyleIcons} />
  </BottomNavItem>
  <Dropdown>
    <DropdownItem on:click={()=>{push("/datos-personales")}}>Datos personales</DropdownItem>
    <DropdownItem on:click={()=>{push("/empleados")}}>Empleados</DropdownItem>
  </Dropdown>

  <BottomNavItem btnName="{GetNameButton(4,innerWidth)}">
    <ComputerSpeakerOutline class={StyleIcons} />
  </BottomNavItem>
  <Dropdown>
    <DropdownItem on:click={()=>{push("/equipos-conectados")}}>En linea</DropdownItem>
    <DropdownItem on:click={()=>{push("/equipos-registrados")}}>Registrados</DropdownItem>
  </Dropdown>
</BottomNav>
