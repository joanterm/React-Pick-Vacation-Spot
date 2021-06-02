import React from "react"


const Modal = (props) => {
    if (!props.open) return null
    return(
        <div className="overlay">
            <div className="modal">
                <button onClick={props.close}>Close</button>
                <h1>MODAL</h1>
                {props.children}
            </div>
        </div>
    )
}

export default Modal