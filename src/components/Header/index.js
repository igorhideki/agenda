import React from 'react';

import InputSearch from '~/components/InputSeach';
import { Container, Logo } from './styles';
import icLogo from '~/assets/ic-logo.svg';

export default function Header() {
  return (
    <Container>
      <Logo src={icLogo} />
      <InputSearch />
    </Container>
  );
}
