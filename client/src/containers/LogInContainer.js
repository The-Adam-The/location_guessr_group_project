import { useState } from 'react';
import LogInForm from '../components/LogInForm'
import InstructionsPopup from '../components/InstructionsPopup';
import logo from '../images/globe_with_background.png';
import './LogInContainer.css';


const LogInContainer = ({displayGamePage, setUserName}) => {
    const [rulePopup, setRulePopup] = useState(false);
    return(
        <div className="login-container">
                <article className="page-info">
                    <section className="headings">
                        <h1>How many locations can you pin on the map?</h1>
                        <h2>Test your trivia and geography knowledge in one game</h2>
                        <LogInForm displayGamePage={displayGamePage} setUserName={setUserName}/>
                    </section>
                        <section className="game-info">
                            <img className="globe" src={logo} alt="globe with locations pinned" />
                            <div className="info-boxes">
                                <h5 className="info-box1">3 Questions per round</h5>
                                <h5 className="info-box2">Time: Unlimited</h5>
                                <InstructionsPopup trigger={rulePopup} setTrigger={setRulePopup}>
                                    <p>Pin your trivia guess on the map and see how close you got!</p>
                                </InstructionsPopup>
                                <nav className="question-buttons">
                                    <button className="instructions-button blue-btn" onClick={() => setRulePopup(true)}>
                                        Instructions&nbsp;&nbsp; 
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