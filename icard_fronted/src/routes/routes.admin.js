import { Error404 } from "../pages/Error";
import {AdminLayout} from "../layouts";
import {LoginAdmin} from "../pages/Admin";
const routerAdmin = [
    {
        path: "/admin",
        layout: AdminLayout,
        component: LoginAdmin,
    },
    {
        path:"*",
        layout: AdminLayout,
        component: Error404,
    }
];

export default routerAdmin;