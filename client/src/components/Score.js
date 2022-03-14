import { useState } from "react";

const Score = ({markers, haversineDistance, checkButton}) => {

    const [indDistance, setIndDistance] = useState(0);
    const [indAccuracy, setIndAccuracy] = useState(0);

    if (checkButton) {
        const distance = 
            (haversineDistance(markers[0], markers[1])*1.60934).toFixed(2)
        setIndDistance(distance);
        distance >= 5 ? setIndAccuracy(100) : setIndAccuracy(100-(distance/1.55));
    }

    return(
        <>
            <p>{indDistance} km</p>
            <p>{indAccuracy} %</p>
        </>
    );
};

export default Score;