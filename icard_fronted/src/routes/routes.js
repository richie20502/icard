import routerAdmin from "./routes.admin";
import routerClient from "./routes.client";

const routes = [...routerAdmin, ...routerClient];

export default routes;