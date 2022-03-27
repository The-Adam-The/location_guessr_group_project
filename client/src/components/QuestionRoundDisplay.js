const QuestionRoundDisplay = ({roundNumber, numberOfRounds}) => {
    return (
        <div className="question-round-display">
            <h3>Question {roundNumber}/{numberOfRounds}</h3>
        </div>
    );
};

export default QuestionRoundDisplay;