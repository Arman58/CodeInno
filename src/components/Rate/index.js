import {useContext, useState} from "react";
import {FaStar} from "react-icons/fa";
import {useParams} from "react-router-dom";

import './Rate.css';
import {MapContext} from "../../context/MapContext";

const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"

};


const Rate = () => {
    const [message, setMessage] = useState('');
    const {submitting, currentValue, setCurrentValue, handleClick} = useContext(MapContext)
    const [hoverValue, setHoverValue] = useState(undefined);
    const stars = Array(5).fill(0)
    const {id} = useParams()


    const setRate = value => {
        handleClick(value)
    }


    const handleMouseOver = newHoverValue => {
        setHoverValue(newHoverValue)
    };

    const handleMouseLeave = () => {
        setHoverValue(undefined)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        submitting(id, {message, rate: currentValue})
        setMessage('')
        setCurrentValue(0)
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="container">
                    <h2> Rate our restaurant </h2>
                    <div className="stars">
                        {stars.map((_, index) => {
                            return (
                                <FaStar
                                    key={index}
                                    size={24}
                                    onClick={() => setRate(index + 1)}
                                    onMouseOver={() => handleMouseOver(index + 1)}
                                    onMouseLeave={handleMouseLeave}
                                    color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
                                    style={{
                                        marginRight: 10,
                                        cursor: "pointer",
                                    }}
                                />
                            )
                        })}
                    </div>
                    <textarea
                        name='message'
                        onChange={e => setMessage((e.target.value))}
                        value={message}
                        placeholder="What's your experience?"
                        className="textarea"
                        required
                    />
                    <button className="submitButton" type="submit"> Leave feedback</button>
                </div>
            </form>
        </div>
    );
};


export default Rate;


