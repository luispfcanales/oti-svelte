<script>
  import Router from "svelte-spa-router"
  import routes from "./routes";
  import Notifications from 'svelte-notifications';
</script>

<Notifications>
  <Router {routes}></Router>
</Notifications>
