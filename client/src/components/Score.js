const Score = ({indDistance, indAccuracy, handleCalculation}) => {

    return(
        <>
            <p>{indDistance} km</p>
            <p>{indAccuracy} %</p>
        </>
    );
};

export default Score;