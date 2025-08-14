
import { createRoot } from "react-dom/client";
import Header from "./Components/header";
import "./index.css";
import SearchBar from "./Components/SearchBar";
import Filter from "./Components/Filter";
import CountryCard from "./CountryCard";
import App from "./App";
import Home from './Home'
import React from "react";
import SkeletonCardDetails from "./SkeletonCardDetails";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Contact from "./Contact";
import CountryDetails from "./CountryDetails";
const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
    children:[{
      path:'/',
      element:<Home/>
    },{
      path:'/contact',
      element:<Contact/>
    },{
      path:'/country/:name',
      element:<CountryDetails/>
    },
  {
      path:'/sk',
      element:<SkeletonCardDetails/>
    }]
  },
]);


createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
