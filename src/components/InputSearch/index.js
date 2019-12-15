import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';

import { setSearchText } from '~/store/modules/schedule/actions';

import { Container } from './styles';
import icSearch from '~/assets/ic-search.svg';

export default function InputSearch() {
  const ref = useRef();
  const dispatch = useDispatch();

  function handleFocus() {
    ref.current.focus();
  }

  function handleChange(e) {
    dispatch(setSearchText(e.target.value));
  }

  return (
    <Container>
      <input
        ref={ref}
        type="text"
        placeholder="Buscar..."
        onChange={handleChange}
      />
      <button type="button" onClick={handleFocus}>
        <img src={icSearch} alt="ícone de lupa para busca" />
      </button>
    </Container>
  );
}
