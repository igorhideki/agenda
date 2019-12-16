import React, { useState, useMemo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  addNewContact,
  showContactModal,
  removeContactHighlight,
  editContact,
  addContactSelected,
} from '~/store/modules/schedule/actions';
import phoneMask from '~/utils/phoneMask';

import Modal from '~/components/Modal';
import { Container } from './styles';

export default function ContactModal() {
  const isOpen = useSelector(state => state.schedule.isOpenContactModal);
  const isEditing = useSelector(state => state.schedule.isEditing);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const contactSelected = useSelector(state => state.schedule.contactSelected);

  useEffect(() => {
    if (isEditing) {
      setName(contactSelected.name);
      setEmail(contactSelected.email);
      setPhone(contactSelected.phone);
    }
  }, [
    isEditing,
    contactSelected.name,
    contactSelected.email,
    contactSelected.phone,
  ]);

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
    if (isEditing) {
      dispatch(
        editContact({
          id: contactSelected.id,
          name,
          email,
          phone,
        })
      );

      dispatch(addContactSelected({}));
    } else {
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
    }

    clearForm();
    closeModal();
  }

  function onCancel() {
    clearForm();
    closeModal();
  }

  function handlePhone(e) {
    const { value } = e.target;

    setPhone(phoneMask(value));
  }

  return (
    <Container>
      <Modal
        isOpen={isOpen}
        onCancel={onCancel}
        confirmDisabled={isConfirmButtonDisabled}
        onConfirm={onConfirm}
        title={isEditing ? 'Editar contato' : 'Criar novo contato'}
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
            <input id="phone" type="tel" onChange={handlePhone} value={phone} />
          </label>
        </div>
      </Modal>
    </Container>
  );
}
