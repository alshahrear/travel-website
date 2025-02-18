import { createBrowserRouter } from "react-router-dom";
import Root from "../Component/Root/Root";
import Home from "../Component/Home/Home";
import Booking from "../Component/Booking/Booking";
import Login from "../Component/Login/Login";
import Register from "../Component/Register/Register";
import PrivetRoutes from "../PrivetRoutes/PrivetRoutes";
import Blogs from "../Component/UserPage/Blogs";
import ErrorPage from "../Component/ErrorPage/ErrorPage";


const routes = createBrowserRouter([
    {
      path: "/",
      errorElement: <ErrorPage></ErrorPage>,
      element: <Root></Root>,
      children:[
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "/booking",
          element: <Booking></Booking>
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
          path: "/blog",
          element: <Blogs></Blogs>,
          loader: () => fetch("hotel.json")

          
        }
      ]
    },
  ]);

  export default routes;