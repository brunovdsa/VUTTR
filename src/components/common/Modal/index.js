import React from 'react'
import './styles.css'

const Modal = ({ id = "modal", onClose= () => {}, children }) => { 

    const handleOutsideClick = (event) => {
        if(event.target.id === id) onClose();
    }

    return (
        <div id={id} className="modal" onClick={handleOutsideClick}>
            <div className="container">
                <button className="close-btn" onClick={onClose}></button>
                <div className="content">{ children }</div>
            </div>
        </div>        
    );    
};

export default Modal;