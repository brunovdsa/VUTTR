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
                    <a className="link-modal" href="/warzone">Warzone</a>
                    <a className="link-modal" href="/guias">Guias</a>
                    <a className="link-modal" href="/noticias">Noticias</a>
                    <a className="link-modal" href="/sobre">Sobre</a>
                </Modal>
             ) : null}
        </div>
    )
}  

export default ModalButton;