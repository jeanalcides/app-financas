import Modal from 'react-modal';

import { Container } from './styles'

export function NewTransactionModal({ isOpen, onRequestClose }) {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            
        </Modal>
        );
}