import {AdminLayout} from "../layouts";
import {HomeAdmin} from "../pages/Admin";
const routerAdmin = [
    {
        path: "/admin",
        layout: AdminLayout,
        component: HomeAdmin,
        exact: true
    },
];

export default routerAdmin;