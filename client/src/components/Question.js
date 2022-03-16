import './Question.css';

const Question = ({question}) => {
    return(
        <div className="question-box"> 
            {question != null ? <img src={question.imageLink} alt="clue" className='image' /> : null}
            {question != null ? <p>{question.question}</p> : null}
        </div>
    );
};

export default Question;