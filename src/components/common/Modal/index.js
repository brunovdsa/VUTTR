import React from 'react'
import './styles.css'

import Form from '../../Form';

const Modal = ({ id = "modal", onClose= () => {}, children }) => { 

    const handleOutsideClick = (event) => {
        if(event.target.id === id) onClose();
    }

    return (
        <div id={id} className="modal" onClick={handleOutsideClick}>
            <div className="container">
                <button className="close-btn" onClick={onClose}></button>
                <Form></Form>
            </div>
        </div>        
    );    
};

export default Modal;