

const AccuracyFill = ({barFill}) => {
    

    return (
        <div className="accuracy-filler" style={{ width: `${barFill}%`}}> 
            <p className="barfill-text">{barFill}%</p>  
        </div>
    )
}

export default AccuracyFill;
