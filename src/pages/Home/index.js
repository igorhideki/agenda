import React from 'react';
import { useSelector } from 'react-redux';

import Header from '~/components/Header';
import DataTable from '~/components/DataTable';
import EmptyListMessage from '~/components/EmptyListMessage';
import ContactModal from '~/components/ContactModal';
import { Container, Content } from './styles';

export default function Home() {
  const contacts = useSelector(state => state.schedule.contacts);
  const headers = ['Contatos', 'E-mail', 'Telefone'];

  return (
    <Container>
      <Header />
      <ContactModal />
      {contacts.length ? (
        <Content>
          <DataTable headers={headers} data={contacts} />
        </Content>
      ) : (
        <EmptyListMessage />
      )}
    </Container>
  );
}
