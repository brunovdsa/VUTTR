import React, { useState } from 'react';

import './styles.css';

import Modal from '../Modal/index';
import SearchInput from '../SearchInput';

import { GoPlus } from 'react-icons/go';

function ModalButton() {  
    const [isModalVisible, setIsModalVisible] = useState(false);
    return (
        <div className="Modal">
            <SearchInput/>
            <button onClick={() => setIsModalVisible(true)}>
                <GoPlus /> Add
            </button>
            {isModalVisible ? (
                <Modal onClose={() => setIsModalVisible(false)}>
                </Modal>
             ) : null}
        </div>
    )
}  

export default ModalButton;