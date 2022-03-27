import React from "react";

const InstructionsPopup = (rules) => {
    return (rules.trigger) ? (
        <div className="instructions-popup-bg">
            <div className="instructions-popup-box">
                {rules.children}
            </div>
        </div>
    ) : "";
};

export default InstructionsPopup;

