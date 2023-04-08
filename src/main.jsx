import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Books from './components/Books';
import About from './components/About';
import Home from './components/Home';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'books',
                element: <Books />
            },
            {
                path: 'about',
                element: <About />
            },
        ]
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);