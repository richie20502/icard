import {ClientLayout} from "../layouts"
import { Error404 } from "../pages/Error";
import {Home} from "../pages/Client"
const routerClient = [
    {
        path: "/",
        layout: ClientLayout,
        component: Home,
        exact:true
    },
    {
        path:"*",
        layout: ClientLayout,
        component: Error404,
    }
];

export default routerClient;