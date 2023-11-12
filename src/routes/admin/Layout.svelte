<script>
  import { NavBrand, Navbar } from 'flowbite-svelte';
  import MenuNav from '../../lib/MenuNav.svelte';
</script>
<div class="back-image md:px-28 w-full block pb-28">
  <Navbar rounded color="form" class="backdrop-blur-sm bg-white/2 rounded">
    <NavBrand>
      <img src="https://sgd.unamad.edu.pe/img/logo_horizontal.png" class="mr-3 h-9 sm:h-16" alt="Unamad Logo" />
    </NavBrand>
  </Navbar>

  <slot name="sectionBody"/>

  <MenuNav/>
</div>

<style>
  .back-image{
    height: 100vh;
    overflow-y:auto;
    background-image:url("/tejido.png")
  }
</style>
