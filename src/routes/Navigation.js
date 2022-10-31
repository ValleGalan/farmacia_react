import React from "react";
import { Routes, BrowserRouter, Router, Route } from "react-router-dom";
import routes from "./routes";
import {map} from "lodash";

export function Navigation(){ //default borro
    console.log("router->",routes);
    return(
        <div>
            <h1>Welcome to React Router!</h1>
            <BrowserRouter>
            <Routes>
            {map(routes,(route,index)=>
                <Route
                    key={index}
                    path={route.path}
                    element={
                        <route.layout>
                            <route.component/>
                        </route.layout>
                    }
                />
                )}
            </Routes>
            </BrowserRouter>
        </div>
    )
}
/*

*/