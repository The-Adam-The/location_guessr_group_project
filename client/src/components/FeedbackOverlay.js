import {useEffect} from 'react';
import Score from "./Score";

const FeedbackOverlay = ({indDistance, indAccuracy, question}) =>{

     return (  
        <div className="feedback-overlay">
            <Score indDistance={indDistance} indAccuracy={indAccuracy} question={question}/>
        </div>
    )};

export default FeedbackOverlay;