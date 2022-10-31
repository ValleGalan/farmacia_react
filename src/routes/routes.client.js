import {ClientLayout} from "../layouts/ClientLayout/ClientLayout";
import {Home} from "../pages/Client";
//import {Error404} from "../pages"


const routesClient = [
    { path:"/", layout: ClientLayout,component: Home, exact:true },
    //{ layout: ClientLayout,component: Error404 },

];

export default routesClient;