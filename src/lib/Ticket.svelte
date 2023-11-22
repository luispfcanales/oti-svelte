<script>
  import { 
    UserHeadsetOutline,
    InfoCircleOutline
  } from "flowbite-svelte-icons";
</script>
<div class="flex flex-col bg-gray-50 hover:bg-gray-100 group hover:shadow ">
  <div class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
    <UserHeadsetOutline class="text-green-500" />
    <span class="flex-1 ms-3 whitespace-nowrap">#1233</span>
    <span class="inline-flex items-center justify-center px-2 py-0.5 ms-3 text-xs font-medium text-green-500 bg-green-200 rounded dark:bg-gray-700 dark:text-gray-400">Solicitud</span>
  </div>
  <div class="bg-gray-50 p-3 pt-0 flex items-center">
    <InfoCircleOutline class="text-gray-400"/>
    <p class="font-small text-gray-400 pl-2">Soporte impresora</p>
  </div>
</div>
