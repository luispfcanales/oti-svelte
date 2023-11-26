<script>
  import Layout from "./Layout.svelte";
  import TableUserSystem from "../../lib/TableUserSystem.svelte";
  import fakedata from "../../lib/fakedata"

  import {
    Modal,
    Button,
  } from "flowbite-svelte";

  import {
    ExclamationCircleOutline,
  } from 'flowbite-svelte-icons';

  import {toast} from "svelte-sonner"

  //handle open and close modal
  let triggerModal = false;
  let keyID = 0;
  function fnOpenModalDelete(id){ 
    keyID = id
    triggerModal = true;
  }

  //handle Notification
  function fnShowNotification(){
    toast.success("Usuario eliminado!")
    //addNotification({
    //  text:`Usuario ${keyID} eliminado!`,
    //  position:'top-center',
    //  removeAfter: 4000,
    //  type: 'success',
    //})
  }
</script>

<Layout>
  <svelte:fragment slot="sectionBody">
    <Modal 
      bind:open={triggerModal}
      size="xs"
      autoclose
      outsideclose
    >
      <div class="text-center">
        <ExclamationCircleOutline class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" />
        <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Esta seguro que desea eliminar?</h3>
        <Button 
          on:click={fnShowNotification}
          color="red"
          class="mr-2"
        >
          Si, eliminar!
        </Button>
        <Button color="alternative">No, cancelar</Button>
      </div>
    </Modal>
    <TableUserSystem 
      items={fakedata}
      {fnOpenModalDelete}
    />
  </svelte:fragment>
</Layout>
