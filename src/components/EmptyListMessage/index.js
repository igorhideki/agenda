import React from 'react';

import CreateContactButton from '~/components/CreateContactButton';
import { Container } from './styles';
import icBook from '~/assets/ic-book.svg';

export default function EmptyListMessage() {
  return (
    <Container>
      <img src={icBook} alt="ícone livro aberto" />
      <p>Nenhum contato foi criado ainda</p>

      <CreateContactButton />
    </Container>
  );
}
