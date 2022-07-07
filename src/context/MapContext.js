import {createContext, useState} from "react";
import {getRestaurant, sendFeedback} from "../service/restaurants";

export const MapContext = createContext({});

export const MapProvider = ({children}) => {
    const [location, setLocation] = useState({
        location: {lat: '40.21894044279743', lng: ' 44.56137785730882'},
        name: "Khinkali Restaurant",
        rate: 2.1538461538461537,
    })
    const [feedback, setFeedback] = useState({})

    const [currentValue, setCurrentValue] = useState(0);

    const handleClick = value => {
        setCurrentValue(value)
    }

    const submitting = (id, body) => {
        sendFeedback(id, body).then(r => setFeedback(r.data))
    }

    const changeLocation = (id) => {
        getRestaurant(id).then(r => setLocation(r))
    }



    const value = {
        location,
        changeLocation,
        submitting,
        feedback,
        currentValue,
        setCurrentValue,
        handleClick
    }

    return <MapContext.Provider value={value}>{children}</MapContext.Provider>
}
