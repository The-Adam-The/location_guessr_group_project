import React from "react";

function RulesPopup(rules) {
    return (rules.trigger) ? (
        <div className="popup-bg">
            <div className="popup-box">
                <button 
                className="close-btn" 
                onClick={() => rules
                .setTrigger(false)}>
                    X
                </button>
                {rules.children}
            </div>
        </div>
    ) : "";
};
export default RulesPopup;