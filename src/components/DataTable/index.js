import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import {
  deleteContact,
  showContactModal,
  addContactSelected,
} from '~/store/modules/schedule/actions';

import ConfirmationModal from '~/components/ConfimationModal';
import { Container, Avatar, Actions, TableRow } from './styles';

import icEdit from '~/assets/ic-edit.svg';
import icDelete from '~/assets/ic-delete.svg';

export default function DataTable({ headers, data }) {
  const [isOpen, setIsOpen] = useState(false);
  const [itemSelectedId, setItemSelectedId] = useState('');
  const dispatch = useDispatch();

  function getInitialName(name) {
    return name[0].toUpperCase();
  }

  function getBackgroundColor(name) {
    const letter = getInitialName(name);
    const colors = [
      '#fa8d68', // A
      '#90d26c', // B
      '#68a0fa', // C
      '#fab668', // D
      '#8368fa', // E
      '#fa68b5', // F
      '#5fe2c4', // G
      '#f55a5a', // H
    ];
    const indexFistLetter = 65;
    const index = (letter.charCodeAt() - indexFistLetter) % colors.length;

    return colors[index];
  }

  function handleDelete(id) {
    setIsOpen(true);
    setItemSelectedId(id);
  }

  function handleCloseModal() {
    setIsOpen(false);
    setItemSelectedId('');
  }

  function handleConfirmDelete() {
    handleCloseModal();
    dispatch(deleteContact(itemSelectedId));
  }

  function handleEdit(contact) {
    const isOpenContactModal = true;
    const isEditing = true;

    dispatch(addContactSelected(contact));
    dispatch(showContactModal(isOpenContactModal, isEditing));
  }

  return (
    <>
      <Container>
        <table>
          <thead>
            <tr>
              <th width="48">&nbsp;</th>
              {headers.map(header => (
                <th key={header}>{header}</th>
              ))}
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            {data.map(item => (
              <TableRow key={item.id} highlight={item.highlight}>
                <td>
                  <Avatar color={getBackgroundColor(item.name)}>
                    {getInitialName(item.name)}
                  </Avatar>
                </td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <Actions>
                  <div>
                    <button type="button" onClick={() => handleEdit(item)}>
                      <img src={icEdit} alt="ícone de lápis" />
                    </button>
                    <button type="button" onClick={() => handleDelete(item.id)}>
                      <img src={icDelete} alt="ícone de lata de lixo" />
                    </button>
                  </div>
                </Actions>
              </TableRow>
            ))}
          </tbody>
        </table>
      </Container>
      <ConfirmationModal
        isOpen={isOpen}
        onCancel={handleCloseModal}
        onConfirm={handleConfirmDelete}
      />
    </>
  );
}

DataTable.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string).isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      email: PropTypes.string,
      phone: PropTypes.string,
      active: PropTypes.bool,
    })
  ).isRequired,
};
