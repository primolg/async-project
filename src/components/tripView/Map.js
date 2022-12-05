import React, { useState, useEffect } from "react";
import GoogleMapReact from 'google-map-react'
//components
import LocationPin from "./LocationPin";
//other
import { mapKey } from "./../../../secretKey";

const Map = ({location}) => {
    return (
        <div className="map" id={location.name}>
            <div className="google-map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: mapKey }}
                defaultCenter={location}
                defaultZoom={16}
            >
                <LocationPin
                    name={location.address}
                />
            </GoogleMapReact>
            </div>
        </div>
    ) 
}


export default Map;

