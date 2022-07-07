import React, {useContext} from "react"
import {Link} from "react-router-dom";
import {MapContext} from "../../context/MapContext";
import {FaStar} from "react-icons/fa";

import "./restaurant.css"

const Restaurant = ({data}) => {
    const {changeLocation} = useContext(MapContext)
    const colors = {
        orange: "#FFBA5A",
        grey: "#a9a9a9"

    };
    const stars = Array(5).fill(0)

    return (
        <div className="my-card" onClick={() => changeLocation(data._id)}>
            <span className="offer">Restaurant</span>
            <div className="item-image"><img src={data.image} alt={data.name}/></div>
            <div className="item-content"><h3>{data.name}</h3> <p>{data.address}</p>
                <div className="item-button-section">
                    <div className="item-rate">
                        <div>{data.rate?.toFixed(1)}</div>
                        <div>
                            {stars.map((_, index) => {
                                return (
                                    <FaStar
                                        key={index}
                                        size={24}
                                        color={data.rate > index ? colors.orange : colors.grey}
                                        className="item-star"
                                    />
                                )
                            })}
                        </div>
                    </div>
                    <Link to={`/restaurant/${data._id}`}>
                        <button className="item-button">More</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Restaurant;
