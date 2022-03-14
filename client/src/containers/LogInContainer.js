import Header from '../components/Header';
import LogInForm from '../components/LogInForm'
import Instructions from '../components/Instructions'

const LogInContainer = ({displayGamePage, setUserName}) => {
    return(
        <div className="login-container">
            <Header />
            <h3>How many locations can you pin on the map?</h3>
            <h5>Test your trivia and geography knowledge in one game</h5>
            <img src="https://placebear.com/700/400" alt="bears picture" />
            <h5 className="info-box">3 Questions per round</h5>
            <h5 className="info-box">Game Time: Unlimited</h5>
            <Instructions/>
            <LogInForm displayGamePage={displayGamePage} setUserName={setUserName}/>
        </div>
    );
};

export default LogInContainer;