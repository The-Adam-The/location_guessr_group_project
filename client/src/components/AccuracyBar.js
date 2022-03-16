import AccuracyFill from "./AccuracyFill"

const AccuracyBar = ({barFill}) => {
    return (
       <div className="accuracy-bar">
           <AccuracyFill barFill={barFill} />
       </div> 
    )
}

export default AccuracyBar