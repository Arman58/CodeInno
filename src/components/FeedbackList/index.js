import React, {useEffect, useState} from "react";
import {getFeedbacks} from "../../service/restaurants";
import {useParams} from "react-router-dom";


const FeedbackList = () => {
    const {id} = useParams()
    const [feedbackList, setFeedbackList] = useState([])

    useEffect(() => {
        getFeedbacks(id).then(r => setFeedbackList([...r.data]))
    }, [])
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
