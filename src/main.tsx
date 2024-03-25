import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {createBrowserRouter, RouterProvider, Navigate} from 'react-router-dom';
import Gallery from "./components/Gallery";
import LoginAdmin from "./components/LoginAdmin";
import App from "./App";
import AdminPage from "./components/AdminPage";

function AdminRoute() {
    if (localStorage.token){
        return <AdminPage/>
    }else{
        return <Navigate to="/login" />
    }
}
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Gallery />,
            },
            {
                path: "/login",
                element: <LoginAdmin />,
            },
            {
                path: "admin/*",
                element: <AdminRoute />,

            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(<RouterProvider router={router} />)

