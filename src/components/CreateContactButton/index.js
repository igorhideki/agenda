import React from 'react';
import { useDispatch } from 'react-redux';

import { showContactModal } from '~/store/modules/schedule/actions';

import Button from '~/components/Button';

import icPlus from '~/assets/ic-plus.svg';

export default function CreateContactButton() {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(showContactModal(true));
  }

  return (
    <Button color="accent" onClick={handleClick}>
      <>
        <img src={icPlus} alt="ícone de adicionar" />
        <span>Criar contato</span>
      </>
    </Button>
  );
}
