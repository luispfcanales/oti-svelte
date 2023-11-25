<script>
  import Router from "svelte-spa-router"
  import UserSystem from './UserSystem.svelte';
  import Home from "./Home.svelte";

  const prefix = '/admin'
  const routes = {
    '/':Home,
    '/usuarios':UserSystem,
  }
</script>

<Router {routes} {prefix}></Router>
