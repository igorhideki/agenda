import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

import Header from '~/components/Header';
import DataTable from '~/components/DataTable';
import EmptyListMessage from '~/components/EmptyListMessage';
import ContactModal from '~/components/ContactModal';
import { Container, Content } from './styles';

export default function Home() {
  const contacts = useSelector(state => state.schedule.contacts);
  const headers = ['Contatos', 'E-mail', 'Telefone'];

  const contactsSorted = useMemo(
    () =>
      [...contacts].sort((a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
          return -1;
        }
        return 1;
      }),
    [contacts]
  );

  return (
    <Container>
      <Header />
      <ContactModal />
      {contacts.length ? (
        <Content>
          <DataTable headers={headers} data={contactsSorted} />
        </Content>
      ) : (
        <EmptyListMessage />
      )}
    </Container>
  );
}
