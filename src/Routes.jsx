import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import SetRole from "./Components/SetRole";
import SetBuyerProfile from "./Components/SetBuyerProfile";
import SetSellerProfile from "./Components/SetSellerProfile";


const router = createBrowserRouter([
    {
        path:"",
        element:<Layout></Layout>,
        children:[
            {
                path:"setRole",
                element:<SetRole></SetRole>
            },
            {
                path:"setBuyerProfile",
                element:<SetBuyerProfile></SetBuyerProfile>
            },
            {
                path:"setSellerProfile",
                element:<SetSellerProfile></SetSellerProfile>
            }
        ]
    }

])


export default router;