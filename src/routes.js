import {wrap} from 'svelte-spa-router/wrap'
import Login from "./routes/Login.svelte"
import InformationApp from "./routes/InformationApp.svelte"
import AdminRoute from "./routes/admin/AdminRoute.svelte"

const isAuthenticated = () => {
  return true
}

const routes = {
  '/':InformationApp,
  '/login':Login,
  '/admin':wrap({
    component:AdminRoute,
    conditions:[
      ()=>isAuthenticated(),
    ],
  }),
  '/admin/*':AdminRoute,
}

export default routes;
