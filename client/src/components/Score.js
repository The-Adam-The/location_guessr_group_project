const Score = ({indDistance, indAccuracy}) => {

    return(
        <>
            <p>{indDistance} km</p>
            <p>{indAccuracy} %</p>
        </>
    );
};

export default Score;