import React, {useContext, useEffect, useState} from "react";
import {getFeedbacks} from "../../service/restaurants";
import {useParams} from "react-router-dom";
import {MapContext} from "../../context/MapContext";


const FeedbackList = () => {
    const {id} = useParams()
    const [feedbackList, setFeedbackList] = useState([])
    const {feedback} = useContext(MapContext)

    useEffect(() => {
        getFeedbacks(id).then(r => setFeedbackList([...r.data]))
    }, [feedback])
    return (
        <div className="feedback-list">
            <h1>Restaurant Feedbacks</h1>
            <ul>
                {feedbackList.map((feedback) => {
                    return (
                        <li key={feedback._id}>
                            {feedback.message}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default FeedbackList
