import React from "react"


const Modal = (props) => {


    if (!props.open) return null
    return(
        <div className="overlay">
            <div className="modal">
                <h2>Thank you for booking your amazing vacation at {props.displayValue}! Your request is being processed.</h2>
                <button className="close-modal-btn" onClick={props.close}>Close</button>
                {props.children}       
            </div>
        </div>
    )
}

export default Modal