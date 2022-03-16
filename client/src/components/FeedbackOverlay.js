
import Score from "./Score";

const FeedbackOverlay = ({checkButton, indDistance, indAccuracy, question}) =>{

     return (  
        <div className={checkButton ? "feedback-overlay-show" : "feedback-overlay-hide"}>
            <h2>Score</h2>
            <Score indDistance={indDistance} indAccuracy={indAccuracy} question={question}/>
        </div>
    )};

export default FeedbackOverlay;