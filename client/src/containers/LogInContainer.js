import LogInForm from '../components/LogInForm'
import Instructions from '../components/Instructions'

const LogInContainer = ({displayGamePage, setUserName}) => {
    return(
        <>
            <LogInForm displayGamePage={displayGamePage} setUserName={setUserName}/>
            <Instructions/>
        </>
    );
};

export default LogInContainer;