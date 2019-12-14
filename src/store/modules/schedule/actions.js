export function addNewContact({ name, email, phone }) {
  return {
    type: '@schedule/ADD_NEW_CONTACT',
    payload: { name, email, phone },
  };
}

export function showContactModal(flag) {
  return {
    type: '@schedule/SHOW_CONTACT_MODAL',
    payload: flag,
  };
}
