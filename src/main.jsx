import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './Components/MainLayout/MainLayout';
import Home from './Components/Home/Home';
import Donation from './Components/Donation/Donation';
import Statistics from './Components/Statistics/Statistics';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import CardsDetails from './Components/CardsDetails/CardsDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path:"/",
        element:<Home></Home>,
        loader :()=> fetch('/donation.json')
      },
      {
        path:"/donation",
        element:<Donation></Donation>,
        loader :()=> fetch('/donation.json')
      },
      {
        path:"/statistics",
        element:<Statistics></Statistics>,
        loader :()=> fetch('/donation.json')
      },
      {
        path:"/cards/:id",
        element:<CardsDetails></CardsDetails>,
        loader :()=> fetch('/donation.json')
      }


    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
