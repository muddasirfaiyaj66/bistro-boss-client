import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddItems from "../Pages/Dashboard/AddItems/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems";
import UpdateItem from "../Pages/Dashboard/UpdateItem/UpdateItem";



 export const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children: [
        {
            index: true,
            element: <Home></Home>
        },
         {
          path:'menu',
          element: <PrivateRoute>
            <Menu></Menu>
          </PrivateRoute>

        },
        {
          path:'order/:category',
          element:<Order></Order>
        },
        {
          path:'login',
          element:<Login></Login>
        },
        {
          path:'register',
          element:<Register></Register>
        }
       
      ]
    },
    {
      path:'/dashboard',
      element:<PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>,
      children: [
        //normal user routes
        {
          path:'cart',
          element:<Cart></Cart>
        },

        //admin routes
        {
          path:'allUsers',
          element:<PrivateRoute>
            <AdminRoute>
            <AllUsers></AllUsers>
            </AdminRoute>
          </PrivateRoute>
        },
        {
          path:'manageItems',
          element:<PrivateRoute>
            <AdminRoute>
            <ManageItems></ManageItems>
            </AdminRoute>
          </PrivateRoute>
        },
        {
          path:"updateItem/:id",
          element: <PrivateRoute>
            <AdminRoute>
            <UpdateItem></UpdateItem>
            </AdminRoute>
          </PrivateRoute>
        },
        {
          path:'addItems',
          element:<PrivateRoute>
            <AdminRoute>
            <AddItems></AddItems>
          </AdminRoute>
          </PrivateRoute>
        }
      ]
    }
  ]);