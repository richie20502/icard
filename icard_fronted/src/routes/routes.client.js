import {ClientLayout} from "../layouts"
import {Home} from "../pages/Client"
const routerClient = [
    {
        path: "/",
        layout: ClientLayout,
        component: Home,
        exact:true
    },
    
];

export default routerClient;