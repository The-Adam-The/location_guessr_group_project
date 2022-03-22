import { useEffect, useState } from 'react';
import blueMarker from '../images/right_answer_marker_orange.png';

const CheckButton = ({setIndAccuracy, roundNumber, displayScoresPage, nextRound, markers, setMarkers, checkButton, setCheckButton, question, setQuestion, setCenter, mapRef, postUserScores, numberOfRounds}) => {

    const [questionMarker, setQuestionMarker] = useState({})
    const [buttonText, setButtonText] = useState("Check");

    useEffect(() => {
      if(question != null)
      setQuestionMarker(question.location.coords)
    }, [question])

    questionMarker.icon = {
      url: blueMarker,
      scaledSize: new window.google.maps.Size(40,59)
    }

     // adds question marker to marker state and switches check button to next button
     const handleCheckClick = () => {
       if(markers.length === 0) return
        setMarkers(current => [...current, questionMarker])
        setCheckButton(true)
        if (roundNumber === numberOfRounds){
            setButtonText("Summary")
        } else {
          setButtonText("Next")
        }

      };

    // resets state of game to default settings and will set next question
    const handleNextClick = () => {
      if(roundNumber === numberOfRounds) {
        postUserScores()
        displayScoresPage()
      } else {
        setCenter({lat: 0, lng: 0})
        mapRef.current.setZoom(2)
        setCheckButton(false)
        setMarkers([])
        nextRound()
        setButtonText("Check")
        setIndAccuracy(null)
      }
    };

    return ( 

        <div className="checkbutton">
            {/* {checkButton ? <button className='question-button' onClick={handleNextClick}>Next</button> : <button className='question-button' onClick={markers.length !== 0 ? handleCheckClick : null}>Check</button>} */}
            <button id="game-btn" className="std-btn purple-btn" onClick={checkButton ? handleNextClick : handleCheckClick}>{buttonText}</button>
        </div>
     );
}

export default CheckButton;