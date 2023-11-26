<script>
  import Router from "svelte-spa-router"
  import routes from "./routes";
  import {Toaster} from "svelte-sonner"
</script>

<Router {routes}></Router>
<Toaster
  position="top-right"
/>
