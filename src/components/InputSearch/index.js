import React, { useRef } from 'react';

import { Container } from './styles';
import icSearch from '~/assets/ic-search.svg';

export default function InputSearch() {
  const ref = useRef();

  function handleFocus() {
    ref.current.focus();
  }

  return (
    <Container>
      <input ref={ref} type="text" placeholder="Buscar..." />
      <button type="button" onClick={handleFocus}>
        <img src={icSearch} alt="ícone de lupa para busca" />
      </button>
    </Container>
  );
}
