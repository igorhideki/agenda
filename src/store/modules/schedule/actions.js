export function addNewContact({ id, name, email, phone }) {
  return {
    type: '@schedule/ADD_NEW_CONTACT',
    payload: { id, name, email, phone },
  };
}

export function deleteContact(id) {
  return {
    type: '@schedule/DELETE_CONTACT',
    payload: { id },
  };
}

export function removeContactHighlight(id) {
  return {
    type: '@schedule/REMOVE_CONTACT_HIGHLIGHT',
    payload: { id },
  };
}

export function editContact({ id, name, email, phone }) {
  return {
    type: '@schedule/EDIT_CONTACT',
    payload: { id, name, email, phone },
  };
}

export function addContactSelected(data) {
  return {
    type: '@schedule/ADD_CONTACT_SELECTED',
    payload: data,
  };
}

export function showContactModal(isOpen, isEditing = false) {
  return {
    type: '@schedule/SHOW_CONTACT_MODAL',
    payload: { isOpen, isEditing },
  };
}
