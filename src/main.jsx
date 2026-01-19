import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import App from './App.jsx'
import Home from './components/Home.jsx'
import LightArms from './components/lightArms.jsx'
import MediumArms from "./components/mediumArms.jsx";
import Accessories from './components/accessories.jsx'
import LogInForm from "./forms/login.jsx"

import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import { Provider } from "react-redux";
import { store } from "./store/Stores.js";

import ProtectedRoute from "./components/ProtectedRoute.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";

const router = createBrowserRouter([
    // PUBLIC ROUTE (no layout)
    {
        path: "/login",
        element: <LogInForm />,
    },

    // APP LAYOUT
    {
        path: "/",
        element: <App />,
        children: [
            { index: true, element: <Navigate to="/home" replace /> },

            // PROTECTED PAGES
            {
                element: <ProtectedRoute />,
                children: [
                    { path: "home", element: <Home /> },
                    { path: "light-arms", element: <LightArms /> },
                    { path: "medium-arms", element: <MediumArms /> },
                    { path: "accessories", element: <Accessories /> },
                ],
            },
        ],
    },
]);


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider store={store}>
            <AuthProvider>
                <RouterProvider router={router} />
            </AuthProvider>
        </Provider>
    </StrictMode>
);
