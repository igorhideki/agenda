import React from 'react';

import Header from '~/components/Header';
import { Container } from './styles';

export default function Home() {
  return (
    <Container>
      <Header />
      <h1>Home</h1>
    </Container>
  );
}
