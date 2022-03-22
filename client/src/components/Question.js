import './Question.css';
import {useEffect} from 'react';



const Question = ({question}) => {

    return(
        <div className="question-box">  
            <img src={question.imageLink} alt="clue" className='image' />
            <p>{question.question}</p> 
        </div>


        // <div className="question-box"> 
        //     {question != null ? <img src={question.imageLink} alt="clue" className='image' /> : null}
        //     {question != null ? <p>{question.question}</p> : null}
        // </div>
    );
};

export default Question;