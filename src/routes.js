
import { DEVICE_ROUTE, FAVORITE_ROUTE, SHOP_ROUTE, BASKET_ROUTE, REQUIREMENT_ROUTE, CONTACTS_ROUTE} from "./utils/consts";
import Basket from "./pages/Basket";
import ShopMain from "./pages/ShopMain";
import DevicePage from "./pages/DevicePage";
import Favorite from "./pages/Favorite";
import Contacts from "./pages/Contacts";
import Requirement from "./pages/Requirement";


export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: ShopMain
    },
    {
        path: DEVICE_ROUTE + '/:id',
        Component: DevicePage
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    },
    {
        path: FAVORITE_ROUTE,
        Component: Favorite
    },
    {
        path: CONTACTS_ROUTE,
        Component: Contacts
    },
    {
        path: REQUIREMENT_ROUTE,
        Component: Requirement
    }
]