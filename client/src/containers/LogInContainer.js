import { useState } from 'react';
import Header from '../components/Header';
import LogInForm from '../components/LogInForm'
import InstructionsPopup from '../components/InstructionsPopup';
import logo from '../images/globe_with_background.png';
import './LogInContainer.css';


const LogInContainer = ({displayGamePage, setUserName}) => {
    const [rulePopup, setRulePopup] = useState(false);
    return(
        <div className="login-container">
            <Header />
                <article className="page-info">
                    <section className="headings">
                        <h1>How many locations can you pin on the map?</h1>
                        <h2>Test your trivia and geography knowledge in one game</h2>
                        <LogInForm displayGamePage={displayGamePage} setUserName={setUserName}/>
                    </section>
                        <section className="game-info">
                            <img className="globe" src={logo} alt="bears picture" />
                            <div className="info-boxes">
                                <h5 className="info-box1">3 Questions per round</h5>
                                <h5 className="info-box2">Time: Unlimited</h5>
                                <InstructionsPopup trigger={rulePopup} setTrigger={setRulePopup}>
                                    <h3>Game Rules:</h3>
                                    <br />
                                    <p>Drop your pin on the map when you have guessed the location from the clues!</p>
                                </InstructionsPopup>
                                <nav className="question-buttons">
                                    <button className="instructions-button" onClick={() => setRulePopup(true)}>
                                        Instructions 
                                        <span className="toggle-id"><i class="fa fa-external-link" aria-hidden="true"></i></span>
                                    </button>
                                </nav>
                            </div>
                        </section>
                </article>
        </div>
    );
};

export default LogInContainer;