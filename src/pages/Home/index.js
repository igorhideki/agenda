import React, { useMemo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  clearAllHighlights,
  clearStates,
} from '~/store/modules/schedule/actions';

import Header from '~/components/Header';
import DataTable from '~/components/DataTable';
import EmptyListMessage from '~/components/EmptyListMessage';
import ContactModal from '~/components/ContactModal';
import { Container, Content } from './styles';

export default function Home() {
  const contacts = useSelector(state => state.schedule.contacts);
  const searchText = useSelector(state => state.schedule.searchText);
  const headers = ['Contatos', 'E-mail', 'Telefone'];
  const dispatch = useDispatch();

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

  const contactsFiltered = useMemo(
    () =>
      contactsSorted.filter(contact => {
        const nameFormatted = contact.name.toLowerCase();
        const searchTextFormatted = searchText.toLowerCase();

        return nameFormatted.includes(searchTextFormatted);
      }),
    [contactsSorted, searchText]
  );

  useEffect(() => {
    dispatch(clearAllHighlights());
    dispatch(clearStates());
  }, [dispatch]);

  return (
    <Container>
      <Header />
      <ContactModal />
      {contacts.length ? (
        <Content>
          <DataTable headers={headers} data={contactsFiltered} />
        </Content>
      ) : (
        <EmptyListMessage />
      )}
    </Container>
  );
}
