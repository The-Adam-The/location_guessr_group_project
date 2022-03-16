import React from "react";

function RulesPopup(props) {
    return (props.trigger) ? (
        <div className="popup-bg">
            <div className="popup-box">
                {props.children}
            </div>
        </div>
    ) : "";
};
export default RulesPopup;