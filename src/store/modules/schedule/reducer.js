const INITIAL_STATE = {
  contacts: [],
  isOpenContactModal: false,
};

export default function schedule(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@schedule/ADD_NEW_CONTACT':
      return {
        ...state,
        contacts: [
          ...state.contacts,
          { id: String(new Date().getTime()), ...action.payload },
        ],
      };
    case '@schedule/SHOW_CONTACT_MODAL':
      return { ...state, isOpenContactModal: action.payload };
    case '@schedule/DELETE_CONTACT':
      return {
        ...state,
        contacts: [
          ...state.contacts.filter(contact => contact.id !== action.payload.id),
        ],
      };
    default:
      return state;
  }
}
