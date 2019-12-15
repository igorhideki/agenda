import React, { useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  addNewContact,
  showContactModal,
  removeContactHighlight,
} from '~/store/modules/schedule/actions';

import Modal from '~/components/Modal';
import { Container } from './styles';

export default function ContactModal() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const isOpen = useSelector(state => state.schedule.isOpenContactModal);

  const dispatch = useDispatch();

  const isConfirmButtonDisabled = useMemo(() => {
    return !name && !email && !phone;
  }, [name, email, phone]);

  function clearForm() {
    setName('');
    setEmail('');
    setPhone('');
  }

  function closeModal() {
    dispatch(showContactModal(false));
  }

  function onConfirm() {
    const id = String(new Date().getTime());

    dispatch(
      addNewContact({
        id,
        name,
        email,
        phone,
      })
    );

    setTimeout(() => {
      dispatch(removeContactHighlight(id));
    }, 10000);

    clearForm();
    closeModal();
  }

  function onCancel() {
    clearForm();
    closeModal();
  }

  return (
    <Container>
      <Modal
        isOpen={isOpen}
        onCancel={onCancel}
        confirmDisabled={isConfirmButtonDisabled}
        onConfirm={onConfirm}
        title="Criar novo contato"
        confirmText="Salvar"
      >
        <div>
          <label htmlFor="name">
            Nome
            <input
              id="name"
              type="text"
              onChange={e => setName(e.target.value)}
              value={name}
            />
          </label>

          <label htmlFor="email">
            E-mail
            <input
              id="email"
              type="email"
              onChange={e => setEmail(e.target.value)}
              value={email}
            />
          </label>

          <label htmlFor="phone">
            Telefone
            <input
              id="phone"
              type="tel"
              onChange={e => setPhone(e.target.value)}
              value={phone}
            />
          </label>
        </div>
      </Modal>
    </Container>
  );
}
