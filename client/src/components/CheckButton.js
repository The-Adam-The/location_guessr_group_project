
const CheckButton = ({setIndAccuracy, roundNumber, displayScoresPage, nextRound, markers, setMarkers, checkButton, setCheckButton, question, setCenter, mapRef, postUserScores}) => {
  
     // adds question marker to marker state and switches check button to next button
     const handleCheckClick = () => {
        setMarkers(current => [...current, question.location.coords])
        setCheckButton(true)
      };

    // resets state of game to default settings and will set next question
    const handleNextClick = () => {
      if(roundNumber === 3) {
        postUserScores()
        displayScoresPage()
      } else {
        setCenter({lat: 0, lng: 0})
        mapRef.current.setZoom(2)
        setCheckButton(false)
        setMarkers([])
        nextRound()
        setIndAccuracy(null)
      }
    };

    return ( 

        <div className="checkbutton">
            {checkButton ? <button className='question-button' onClick={handleNextClick}>Next</button> : <button className='question-button' onClick={markers.length !== 0 ? handleCheckClick : null}>Check</button>}
        </div>
     );
}

export default CheckButton;