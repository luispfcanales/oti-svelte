import Login from "./routes/Login.svelte"
import Home from "./routes/Home.svelte"
import Page from "./routes/admin/Page.svelte"
const routes = {
  "/":Home,
  "/login":Login,
  "/admin":Page,
}
export default routes;
