const CheckButton = ({markers, setMarkers, checkButton, setCheckButton}) => {
    

     // adds question marker to marker state and switches check button to next button
     const handleCheckClick = () => {
        setMarkers(current => [...current, question.location.coords])
        setCheckButton(true)

      };


    // resets state of game to default settings and will set next question
    const handleNextClick = () => {
    setCenter({lat: 0, lng: 0})
    mapRef.current.setZoom(2)
    setCheckButton(false)
    setMarkers([])
    // add in a setQuestion(newQuestion) function here once we have selection of questions from db
    };


    return ( 

        <div className="checkbutton">
            {checkButton ? <button className='question-button' onClick={handleNextClick}>Next</button> : <button className='question-button' onClick={markers.length !== 0 ? handleCheckClick : null}>Check</button>}
            {markers.length === 2 ? <h2>{haversine_distance(markers[0], markers[1]).toFixed(2)}mi / {(haversine_distance(markers[0], markers[1])*1.60934).toFixed(2)}km</h2>  : null}
        </div>

     );
}

export default CheckButton;