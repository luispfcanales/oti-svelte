<script>
  import { Card } from 'flowbite-svelte';
  import { Label, Input, InputAddon, ButtonGroup, Button } from 'flowbite-svelte';
  import { UserCircleSolid,LockSolid } from 'flowbite-svelte-icons';
  import {push} from "svelte-spa-router"

  import { QRCodeImage } from "svelte-qrcode-image";
  import { v4 as uuidv4 } from "uuid";
  import Background from '../lib/Background.svelte';
  function handleLogin(){
    push('/admin')
  }
</script>

<Background vh={true}/>
<section class="h-screen flex justify-center items-center ">
  <Card class="w-full max-w-md flex flex-col backdrop-blur-sm bg-white/2">
    <div class="w-full h-16">
      <img class="w-90 h-full" src="https://sgd.unamad.edu.pe/img/logo_horizontal.png" alt="" />
    </div>
    <div class="w-full flex">
      <div class="w-full">
        <div class="mb-6 mt-2">
          <Label for="website-admin" class="block mb-2">Usuario</Label>
          <ButtonGroup class="w-full">
            <InputAddon>
              <UserCircleSolid class="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </InputAddon>
            <Input  placeholder="Usuario" />
          </ButtonGroup>
        </div>

        <div class="mb-6">
          <Label for="website-admin" class="block mb-2">Contrasena</Label>
          <ButtonGroup class="w-full">
            <InputAddon>
              <LockSolid class="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </InputAddon>
            <Input  type="password" placeholder="Contrasena" />
          </ButtonGroup>
        </div>
        <Button color="green" on:click={handleLogin}>Ingresar</Button>
      </div>
      <div class="hidden md:flex md:flex-col justify-center items-center ml-4">
        <QRCodeImage
          displayClass="border rounded"
          scale={5}
          displayType="canvas"
          text={uuidv4()}
        />
        <h1 class="text-sm mb-2 font-medium text-gray-500 dark:text-white">Ingresa Escaneado el codigo QR.</h1>
      </div>
    </div>
  </Card>
</section>
