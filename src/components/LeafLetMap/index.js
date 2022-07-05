import React, {useContext} from "react";
import {
    MapContainer,
    TileLayer,
    Marker,
    Tooltip,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import icon from "./icon";
import "./Map.css";
import {MapContext} from "../../context/MapContext";
import {FaStar} from "react-icons/fa";


const LeafLetApp = () => {
    const {location} = useContext(MapContext)
    const position = [+location.location?.lat, +location.location?.lng]
    const orange = '#FFBA5A'

    const stars = Array(5).fill(0)


    return (
        <>
            {location && <MapContainer
                center={position}
                boundsOptions={position}
                zoom={13}
                style={{height: "100vh", width: '100%'}}
            >
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position} icon={icon}>
                    <Tooltip>
                        <div className="tooltip-section">{location.name}
                            <div>  {stars.map((_, index) => {
                                return (
                                    <FaStar
                                        key={index}
                                        size={24}
                                        color={orange}
                                        style={{
                                            marginRight: 10,
                                            cursor: "pointer"
                                        }}
                                    />
                                )
                            })}</div>
                        </div>
                    </Tooltip>
                </Marker>
            </MapContainer>
            }
        </>
    );
}

export default LeafLetApp
