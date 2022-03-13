const CheckButton = ({markers, setMarkers, checkButton, setCheckButton, question, setCenter, haversineDistance, mapRef, nextQuestion}) => {
    

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
    nextQuestion()
    };

    return ( 

        <div className="checkbutton">
            {checkButton ? <button className='question-button' onClick={handleNextClick}>Next</button> : <button className='question-button' onClick={markers.length !== 0 ? handleCheckClick : null}>Check</button>}
            {markers.length === 2 ? <h2>{haversineDistance(markers[0], markers[1]).toFixed(2)}mi / {(haversineDistance(markers[0], markers[1])*1.60934).toFixed(2)}km</h2>  : null}
        </div>

     );
}

export default CheckButton;