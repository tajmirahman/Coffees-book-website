import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../components/Home";
import Dashboard from "../Pages/Dashboard";
import CoffeeCard from "../components/CoffeeCard";
import Coffee from "../Pages/Coffee";
import CoffeeDetails from "../Pages/CoffeeDetails";



const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('../categories.json'),
                children: [
                    {
                        path: '/',
                        element: <CoffeeCard />,
                        loader: () => fetch('../coffees.json'),
                    },
                    {
                        path: '/category/:category',
                        element: <CoffeeCard />,
                        loader: () => fetch('../coffees.json'),
                    },
                ]
            },
            {
                path: '/coffee',
                element:<Coffee />,
                loader: () => fetch('../coffees.json'),
            },
            {
                path: '/coffee/:id',
                element:<CoffeeDetails />,
                loader: () => fetch('../coffees.json'),
            },
            {
                path:'/dashboard',
                element: <Dashboard />
            }
        ]
    },
]);

export default routes;