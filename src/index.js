import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom"

import App from './components/App';
import ErrorPage from "./components/ErrorPage";
import PetList from "./components/PetList";
import NewPetForm from "./components/NewPetForm";
import PetProfile from "./components/PetProfile";

// import Header from "./components/Header";
// import ExampleComponent from './components/ExampleComponent';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/",
                element: <PetList/>
            },
            {
                path: "/add_pet",
                element: <NewPetForm/>
            },
            {
                path: "/profiles/:id",
                element: <PetProfile/>
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();