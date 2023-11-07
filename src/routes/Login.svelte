<script>
  import { Card } from 'flowbite-svelte';
  import { Label, Input, InputAddon, ButtonGroup, Button } from 'flowbite-svelte';
  import { UserCircleSolid,LockSolid } from 'flowbite-svelte-icons';
  import {push} from "svelte-spa-router"

  function handleLogin(){
    push('/admin')
  }
</script>

<section class="h-screen flex justify-center items-center bg-rose-100">
  <Card>
    <div class="mb-6">
      <Label for="website-admin" class="block mb-2">Usuario</Label>
      <ButtonGroup class="w-full">
        <InputAddon>
          <UserCircleSolid class="w-4 h-4 text-gray-500 dark:text-gray-400" />
        </InputAddon>
        <Input id="website-admin" placeholder="Usuario" />
      </ButtonGroup>
    </div>

    <div class="mb-6">
      <Label for="website-admin" class="block mb-2">Contrasena</Label>
      <ButtonGroup class="w-full">
        <InputAddon>
          <LockSolid class="w-4 h-4 text-gray-500 dark:text-gray-400" />
        </InputAddon>
        <Input id="website-admin" type="password" placeholder="Contrasena" />
      </ButtonGroup>
    </div>
    <Button color="green" on:click={handleLogin}>Ingresar</Button>
  </Card>
</section>
