import React from 'react';
import PropTypes from 'prop-types';

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

ConfirmationModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
};
