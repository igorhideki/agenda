export function addNewContact(name, email, phone) {
  return {
    type: '@schedule/ADD_NEW_CONTACT',
    payload: { name, email, phone },
  };
}
