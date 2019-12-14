import React from 'react';
import { useSelector } from 'react-redux';

import InputSearch from '~/components/InputSearch';
import CreateContactButton from '~/components/CreateContactButton';
import { Container, Logo } from './styles';
import icLogo from '~/assets/ic-logo.svg';

export default function Header() {
  const contactsLength = useSelector(state => state.schedule.contacts.length);
  return (
    <Container>
      <Logo src={icLogo} />
      {!!contactsLength && <CreateContactButton />}
      <InputSearch />
    </Container>
  );
}
