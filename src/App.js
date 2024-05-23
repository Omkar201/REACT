import React ,{lazy,Suspense} from "react"
import ReactDOM from "react-dom/client"
import "../index.css"
import Header from "./components/header"
import Body from "./components/body"
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
// import About from "./components/about"
import COntact from "./components/contact"
// import Cart from "./components/cart"
import RestaurantCard from "./components/Resturant"
import RestaurantMenu from "./components/restaurantmenu"
import { Suspense, lazy } from "react"

const About=lazy(()=>import("./components/about"))
const Cart=lazy(()=>import("./components/cart"))

const App = () => {
    return (
      <div>
        <Header />
        <Outlet />
      </div>
    );
  };
  
  const appRouter = createBrowserRouter([{
    path:"/",
    element:<App/>,
    children:[
        {
            path: "/",
            element: <Body/>,
          },
          {
            path: "/about",
            element:<Suspense> <About /></Suspense>,
          },
          {
            path: "/cart",
            element:<Suspense><Cart /></Suspense>,
          },
          {
            path: "/contact",
            element: <COntact />,
          },
          {
            path: "/restaurant/:id",
            element: <RestaurantMenu />,
          },
    ]
}]);

const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter}/>)