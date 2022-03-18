import React from "react";

function InstructionsPopup(rules) {
    return (rules.trigger) ? (
        <div className="instructions-popup-bg">
            <div className="instructions-popup-box">
                {rules.children}
            </div>
        </div>
    ) : "";
};
export default InstructionsPopup;



// const Instructions = () => {
//     return(
//         <>
//             <button className="instructions-button">
//                 Instructions 
//                 <span className="toggle-id"><i class="fa fa-external-link" aria-hidden="true"></i></span>
//                 </button>
//         </>
//     );
// };

// export default Instructions;