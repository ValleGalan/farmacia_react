import {AdminLayout} from "../layouts/AdminLayout"
import {HomeAdmin, FarmaciaAdmin} from "../pages/Admin";
import {UsersAdmin} from "../pages/Admin/UsersAdmin";


const routesAdmin=[
    { path:"/admin", layout: AdminLayout,component: HomeAdmin, exact :true },
    { path:"/admin/farmacias", layout: AdminLayout,component: FarmaciaAdmin, exact :true },
    { path:"/admin/users", layout: AdminLayout,component: UsersAdmin, exact :true },
];

export default routesAdmin;