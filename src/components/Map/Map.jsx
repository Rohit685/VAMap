import React from "react";
import {ComposableMap, Geographies, Geography, ZoomableGroup} from "react-simple-maps";
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
                <ZoomableGroup center = {[-78.6569, 37.4316]}>
                {/* Geographies expects a function as a child */}
                <Geographies geography={mapData}>
                    {({geographies}) => (
                        geographies.map(geo => (
                            <Geography
                                key={geo.rsmKey}
                                onMouseEnter={() => setCounty(geo.properties.NAME)}
                                geography={geo}
                                fill="#3a9fbf"
                                stroke="lightgrey"
                                style={{
                                    hover: {fill: "blue", outline: "none"},
                                    pressed: {fill: "blue", outline: "none"},
                                }}
                            />
                        ))
                    )}
                </Geographies>
                    </ZoomableGroup>
            </ComposableMap>
        </>
    );
};

export default VirginiaMap;
