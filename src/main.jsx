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
import BookDetails from './components/BookDetails';
import ErrorPage from './components/ErrorPage';


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'books',
                element: <Books />,
                loader: () => fetch('https://api.itbook.store/1.0/new')
            },
            {
                path: 'books/:bookId',
                element: <BookDetails />,
                loader: ({ params }) => fetch(`https://api.itbook.store/1.0/books/${params.bookId}`)
            },
            {
                path: 'about',
                element: <About />
            }
        ]
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
    <RouterProvider router={router} />
    </React.StrictMode>
);