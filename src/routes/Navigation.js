import React from "react";
import { Routes, BrowserRouter, Router, Route } from "react-router-dom";
import routes from "./routes";
import {map} from "lodash";

export function Navigation(){ //siempre llama a este 1ro
    console.log("router->",routes);
    return(
        <div>
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