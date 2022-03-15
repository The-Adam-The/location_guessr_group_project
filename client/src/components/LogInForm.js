import { useState } from 'react';

const LogInForm = ({displayGamePage, setUserName}) => {
    
    const [tempUserName, setTempUserName] = useState('')

    const handleInput = (event) => {
        setTempUserName(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setUserName(tempUserName)
        displayGamePage()
    }

    return(
        <form className="login-form" onSubmit={handleSubmit}>
            <p>Enter your name to start the game</p>
            <input type="text" placeholder="Enter Name Here" value={tempUserName} onChange={handleInput}/>
            <input type="submit" value="Start Game"/>
        </form>
    );
};

export default LogInForm;