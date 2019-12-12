export function addNewContact(name, email, phone) {
  return {
    type: '@contacts/ADD_NEW_CONTACT',
    payload: { name, email, phone },
  };
}
