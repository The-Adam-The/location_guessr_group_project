import React from "react";

function RulesPopup(props) {
    return (props.trigger) ? (
        <div className="popup-bg">
            <div className="popup-box">
                <button 
                className="close-btn" 
                onClick={() => props.setTrigger(false)}>
                    X
                </button>
                {props.children}
            </div>
        </div>
    ) : "";
};
export default RulesPopup;