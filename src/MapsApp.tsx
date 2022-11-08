import { MapProvider, PlacesProvider } from './context';
import { HomeMap } from './pages/Admin/HomeMap';
import React from "react";

import './styles.css';

export const MapsApp = () => {
    return (
        <PlacesProvider>
            <MapProvider>
                <HomeMap />
            </MapProvider>
        </PlacesProvider>
    )
}
