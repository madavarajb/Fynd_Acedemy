//frontend
import React, { useEffect, useState } from "react";
import ReactDom from "react-dom/client";
import Nav from "./Components/Nav";
import Body from "./Components/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Trending from "./Components/Trending";
import Upcomming from "./Components/Upcomming";
import Routecato from "./Components/routecato";
import axios from "axios";
import Favorites from "./Components/Favorites";
import Login from "./Components/login";
import Register from "./Components/Register";
const App=()=>{
    
    
    return(
        <div className="applayout">
          
            <Nav/>
            <Outlet/>
          
           
        </div>
    )
}
const Approuter=createBrowserRouter([
    {
        path:"/",
        element:<App />,
        children:([
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/trending",
                element:<Trending />,
            },
            {
                path:"/upcomming",
                element:<Upcomming />,
            },
          
            {
                path:"/movies/:id",
                element:<Routecato/>
            },
            {
                path:"/favorites",
                element:<Favorites/>
            },

        ])
    },
    {
        path:"/login",
        element:<Login/>
    },
    {
        path:"/register",
        element:<Register/>
    },
])

const root=ReactDom.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={Approuter}/>);
