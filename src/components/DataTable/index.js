import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import {
  deleteContact,
  showContactModal,
  addContactSelected,
} from '~/store/modules/schedule/actions';
import getFirstLetterOfName from '~/utils/getFirstLetterOfName';
import getBackgroundColorByName from '~/utils/getBackgroundColorByName';

import ConfirmationModal from '~/components/ConfimationModal';
import { Container, Avatar, Actions, TableRow } from './styles';

import icEdit from '~/assets/ic-edit.svg';
import icDelete from '~/assets/ic-delete.svg';

export default function DataTable({ headers, data }) {
  const [isOpen, setIsOpen] = useState(false);
  const [itemSelectedId, setItemSelectedId] = useState('');
  const dispatch = useDispatch();

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
                  <Avatar color={getBackgroundColorByName(item.name)}>
                    {getFirstLetterOfName(item.name)}
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
