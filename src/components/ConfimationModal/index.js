import React from 'react';

import Modal from '~/components/Modal';

export default function ConfirmationModal({ isOpen, onCancel, onConfirm }) {
  return (
    <Modal
      isOpen={isOpen}
      onCancel={onCancel}
      onConfirm={onConfirm}
      title="Excluir contato"
      confirmText="Excluir"
    >
      <div>
        <p>Deseja realmente excluir o contato?</p>
      </div>
    </Modal>
  );
}
