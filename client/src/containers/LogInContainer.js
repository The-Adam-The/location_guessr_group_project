import Header from '../components/Header';
import LogInForm from '../components/LogInForm'
import Instructions from '../components/Instructions'
import logo from '../images/globe_with_background.png';
import './LogInContainer.css';

const LogInContainer = ({displayGamePage, setUserName}) => {
    return(
        <div className="login-container">
            <Header />
                <article className="page-info">
                    <section className="headings">
                        <h1>How many locations can you pin on the map?</h1>
                        <h2>Test your trivia and geography knowledge in one game</h2>
                    </section>
                        <img className="globe" src={logo} alt="bears picture" />
                        <section className="game-info">
                            <h5 className="info-box">3 Questions per round</h5>
                            <h5 className="info-box">Game Time: Unlimited</h5>
                            <Instructions/>
                        </section>
                </article>
            <LogInForm displayGamePage={displayGamePage} setUserName={setUserName}/>
        </div>
    );
};

export default LogInContainer;