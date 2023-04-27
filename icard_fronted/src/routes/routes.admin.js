import {AdminLayout} from "../layouts";
import {HomeAdmin, UserAdmin} from "../pages/Admin";
const routerAdmin = [
    {
        path: "/admin",
        layout: AdminLayout,
        component: HomeAdmin,
        exact: true
    },
    {
        path: "/admin/users",
        layout: AdminLayout,
        component: UserAdmin,
        exact: true
    },
];

export default routerAdmin;