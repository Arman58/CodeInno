import React, {useContext, useEffect, useState} from "react"
import {useParams} from "react-router-dom";
import Rate from "../../components/Rate";
import {FaStar} from "react-icons/fa";
import {getRestaurant} from "../../service/restaurants";
import FeedbackList from "../../components/FeedbackList";
import {MapContext} from "../../context/MapContext";

import "./RestaurantDetails.css";

const RestaurantDetails = () => {
    const {id} = useParams()
    const orange = '#FFBA5A'
    const {feedback} = useContext(MapContext)
    const stars = Array(5).fill(0)
    const [productDetails, setProductDetails] = useState({})


    useEffect(() => {
        getRestaurant(id).then(res => setProductDetails(res))
    }, [feedback])

    return (
        <div>
            <div className="ProductDetails-container">
                <div className="card">
                    <div className="thumbnail"><img className="left" src={productDetails.image}
                                                    alt={productDetails.name}/>
                    </div>
                    <div className="info">
                        <h1>{productDetails.name}</h1>
                        <div className="address-section">
                            Address:
                            <div className="restaurant-address">{productDetails.address}</div>
                        </div>
                        <div className="separator"/>
                        <div className="address-section">
                            Service Options:
                            <div className="restaurant-address">{productDetails.serviceOptions}</div>
                        </div>
                        <div className="address-section">
                            Phone:
                            <div className="restaurant-address">{productDetails.phone}</div>
                        </div>

                        <div className="rate-section">
                            <h5>{productDetails.rate?.toFixed(1)}</h5>
                            <div>
                                {stars.map((_, index) => {
                                    return (
                                        <FaStar
                                            key={index}
                                            size={24}
                                            color={orange}
                                        />
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <Rate/>
            </div>
            <FeedbackList/>
        </div>
    )
}

export default RestaurantDetails;
