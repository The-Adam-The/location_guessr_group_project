import './Question.css';

const Question = ({question}) => {
    return(
        <div className="question-box"> 
            Questions Box
            {question != null ? <h3>{question.question}</h3> : null}
            {question != null ? <img src={question.imageLink} alt="clue" className='image' /> : null}
        </div>
    );
};

export default Question;