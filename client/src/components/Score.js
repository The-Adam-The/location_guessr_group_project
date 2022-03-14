import { useState } from "react";

const Score = ({markers, haversineDistance, checkButton}) => {

    const [indDistance, setIndDistance] = useState(0);
    const [indAccuracy, setIndAccuracy] = useState(0);

    if (checkButton) {
        const distance = 
            (haversineDistance(markers[0], markers[1])*1.60934).toFixed(2)
        setIndDistance(distance);
    }

    return(
        <>
            <p>{indDistance}</p>
        </>
    );
};

export default Score;