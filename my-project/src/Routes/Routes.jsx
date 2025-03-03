import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../components/Home";
import Coffee from "../Pages/Coffee";
import Dashboard from "../Pages/Dashboard";
import CoffeeCard from "../components/CoffeeCard";



const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children:[
        {
            path:'/',
            element:<Home />,
            loader:()=>fetch('../categories.json'),
            children:[
                {
                    path:'/',
                    element:<CoffeeCard />,
                    loader:()=>fetch('../coffees.json'),
                }

            ]
        },
        {
            path:'/coffee',
            element:<Coffee />
        },
        {
            path:'/dashboard',
            element:<Dashboard />
        }
    ]
  },
]);

export default routes;