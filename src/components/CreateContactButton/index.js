import React from 'react';
import PropTypes from 'prop-types';

import Button from '~/components/Button';
import icPlus from '~/assets/ic-plus.svg';

export default function CreateContactButton({ handleButtonCreate }) {
  return (
    <Button color="accent" onClick={handleButtonCreate}>
      <>
        <img src={icPlus} alt="ícone de adicionar" />
        <span>Criar contato</span>
      </>
    </Button>
  );
}

CreateContactButton.propTypes = {
  handleButtonCreate: PropTypes.func.isRequired,
};
