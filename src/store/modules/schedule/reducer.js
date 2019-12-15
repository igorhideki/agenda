const INITIAL_STATE = {
  contacts: [],
  isOpenContactModal: false,
  isEditing: false,
  contactSelected: {},
};

export default function schedule(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@schedule/ADD_NEW_CONTACT':
      return {
        ...state,
        contacts: [
          ...state.contacts,
          {
            highlight: true,
            ...action.payload,
          },
        ],
      };

    case '@schedule/SHOW_CONTACT_MODAL':
      return {
        ...state,
        isOpenContactModal: action.payload.isOpen,
        isEditing: action.payload.isEditing,
      };

    case '@schedule/DELETE_CONTACT':
      return {
        ...state,
        contacts: [
          ...state.contacts.filter(contact => contact.id !== action.payload.id),
        ],
      };

    case '@schedule/REMOVE_CONTACT_HIGHLIGHT':
      return {
        ...state,
        contacts: [
          ...state.contacts.map(contact => {
            if (contact.id === action.payload.id) {
              return { ...contact, highlight: false };
            }
            return contact;
          }),
        ],
      };

    case '@schedule/ADD_CONTACT_SELECTED':
      return {
        ...state,
        contactSelected: action.payload,
      };

    case '@schedule/EDIT_CONTACT':
      return {
        ...state,
        contacts: [
          ...state.contacts.map(contact => {
            if (contact.id === action.payload.id) {
              return { ...contact, ...action.payload };
            }
            return contact;
          }),
        ],
      };

    default:
      return state;
  }
}
