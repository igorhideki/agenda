export function addNewContact({ name, email, phone }) {
  return {
    type: '@schedule/ADD_NEW_CONTACT',
    payload: { name, email, phone },
  };
}

export function deleteContact(id) {
  return {
    type: '@schedule/DELETE_CONTACT',
    payload: { id },
  };
}

export function showContactModal(flag) {
  return {
    type: '@schedule/SHOW_CONTACT_MODAL',
    payload: flag,
  };
}
