import React, {useEffect, useState} from "react"
import Restaurant from "../Restaurant";
import {getRestaurants} from "../../service/restaurants";
import LeafLetMap from "../LeafLetMap";

import "./ListRestaurants.css";

const ListRestaurants = () => {
    const [restaurants, setRestaurants] = useState([])

    useEffect(() => {
        getRestaurants().then(data => setRestaurants(data))
    }, [])


    return (
        <div className="ListRestaurants-container">
            <div className="ListRestaurants-section">
                {restaurants.map((restaurant) => <Restaurant key={restaurant._id} data={restaurant}/>)}
            </div>
            <LeafLetMap/>
        </div>
    )
}

export default ListRestaurants;
