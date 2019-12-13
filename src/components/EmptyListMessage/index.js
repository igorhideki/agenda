import React from 'react';

import Button from '~/components/Button';
import { Container } from './styles';
import icBook from '~/assets/ic-book.svg';
import icPlus from '~/assets/ic-plus.svg';

export default function EmptyListMessage() {
  return (
    <Container>
      <img src={icBook} alt="ícone livro aberto" />
      <p>Nenhum contato foi criado ainda</p>

      <Button color="accent">
        <>
          <img src={icPlus} alt="ícone de adicionar" />
          <span>Criar contato</span>
        </>
      </Button>
    </Container>
  );
}
