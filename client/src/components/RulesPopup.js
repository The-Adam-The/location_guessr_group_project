import React from "react";

function RulesPopup(rules) {
    return (rules.trigger) ? (
        <div className="popup-bg">
            <div className="popup-box">
                {rules.children}
            </div>
        </div>
    ) : "";
};
export default RulesPopup;