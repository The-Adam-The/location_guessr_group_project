import AccuracyFill from "./AccuracyFill"

const AccuracyBar = ({barFill}) => {
    return (
    <div className="accuracy-meter">
       <div className="accuracy-bar">
           <AccuracyFill barFill={barFill} />
       </div>
        <p className="barfill-text">{barFill}%</p>  

    </div>
    )
}

export default AccuracyBar