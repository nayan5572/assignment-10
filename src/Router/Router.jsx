import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import AddProduct from "../Pages/AddProduct/AddProduct";
import MyCard from "../Pages/MyCard/MyCard";
import Blog from './../Pages/Blog/Blog';
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AllProduct from "../Pages/AllProduct/AllProduct";
import UpdateData from "../Pages/UpdateData/UpdateData";
import ViewProductDetails from "../Pages/ViewProductDetails/ViewProductDetails";
import PrivateRouter from "./PrivateRouter";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/addProduct",
                element: <PrivateRouter><AddProduct></AddProduct></PrivateRouter>
            },
            {
                path: "/myCard",
                element: <PrivateRouter><MyCard></MyCard></PrivateRouter>,
                loader: () => fetch('http://localhost:2000/addProduct')
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },
            {
                path: "/allProduct",
                element: <AllProduct></AllProduct>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/updateData/:id",
                element: <PrivateRouter><UpdateData></UpdateData></PrivateRouter>,
                loader: ({ params }) => fetch(`http://localhost:2000/addProduct/${params.id}`)
            },
            {
                path: '/viewProductDetails/:id',
                element: <PrivateRouter><ViewProductDetails></ViewProductDetails></PrivateRouter>,
                loader: ({ params }) => fetch(`http://localhost:2000/addProduct/${params.id}`)
            }
        ]
    },
]);

export default router;