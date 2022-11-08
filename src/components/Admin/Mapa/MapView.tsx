
import { useContext, useLayoutEffect, useRef } from 'react';
//import { Map } from '!mapbox-gl';
import React from "react";

import { PlacesContext, MapContext } from '../context';



export const MapView = () => {

    const { userLocation } = useContext( PlacesContext );
    const { setMap } = useContext( MapContext)

    const mapDiv = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
            const map = new Map({
                //*
                container: mapDiv.current! , // container ID
                style: 'mapbox://styles/mapbox/light-v10', // style URL
                center: userLocation, // starting position [longitud , latitud]
                zoom: 14 // starting zoom
                */
            });

            setMap( map );
        
    })




    return (
        <div ref={ mapDiv }
            style={{
                height: '50vh',
                left: 0,
                position: 'fixed',
                top: 0,
                width: '50vw',
            }}
        >
            { userLocation?.join(',') }
        </div>
    )
}