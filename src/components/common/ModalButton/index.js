import React, { useState } from 'react';

import './styles.css';

import Modal from '../Modal/index';

function ModalButton() {  
    const [isModalVisible, setIsModalVisible] = useState(false);
    return (
        <div className="Modal">
            <button onClick={() => setIsModalVisible(true)}>Get Started</button>
            {isModalVisible ? (
                <Modal onClose={() => setIsModalVisible(false)}>
                </Modal>
             ) : null}
        </div>
    )
}  

export default ModalButton;