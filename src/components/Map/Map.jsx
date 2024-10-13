import React from "react";
import {ComposableMap, Geographies, Geography} from "react-simple-maps";
import mapData from '../../utils/VA.json'; // Update the path if necessary
import {useState} from "react";

const VirginiaMap = () => {
    const [currentCounty, setCounty] = useState("");
    return (
        <>
            <div>
        <p>Current County being Hovered: {currentCounty}</p>
                </div>
        <ComposableMap
            projection="geoMercator"
            projectionConfig={{
                scale: 5000,    // Adjust scale to fit Virginia
                center: [-78.6569, 37.4316],  // Centering on Virginia
            }}
            width={800}
            height={600}
        >
            {/* Geographies expects a function as a child */}
            <Geographies geography={mapData}>
                {({geographies}) => (
                    geographies.map(geo => (
                        <Geography
                            key={geo.rsmKey}
                            onMouseEnter={() => setCounty(geo.properties.NAME)}
                            geography={geo}
                            style={{
                                default: {fill: "navy", outline: "white"},
                                hover: {fill: "#F53", outline: "none"},
                                pressed: {fill: "#E42", outline: "none"},
                            }}
                        />
                    ))
                )}
            </Geographies>
        </ComposableMap>
            </>
    );
};

export default VirginiaMap;
