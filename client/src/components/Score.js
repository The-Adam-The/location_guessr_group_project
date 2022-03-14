const Score = ({indDistance, indAccuracy, question}) => {

    return(
        <>
            <p>You were {indDistance} km from {question.location.place}, {question.location.country}</p>
            <p>Accuracy: {indAccuracy} %</p>
        </>
    );
};

export default Score;