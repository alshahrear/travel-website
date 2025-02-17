import { createBrowserRouter } from "react-router-dom";
import Root from "../Component/Root/Root";
import Home from "../Component/Home/Home";
import Booking from "../Component/Booking/Booking";


const routes = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "/booking",
          element: <Booking></Booking>
        }
      ]
    },
  ]);

  export default routes;