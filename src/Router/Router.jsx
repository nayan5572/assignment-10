import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import AddProduct from "../Pages/AddProduct/AddProduct";
import MyCard from "../Pages/MyCard/MyCard";
import Blog from './../Pages/Blog/Blog';
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AllProduct from "../Pages/AllProduct/AllProduct";

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
            element: <AddProduct></AddProduct>
        },
        {
            path: "/myCard",
            element: <MyCard></MyCard>
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
        }
      ]
    },
  ]);

  export default router;