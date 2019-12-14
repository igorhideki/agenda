const INITIAL_STATE = {
  contacts: [],
  isOpenContactModal: false,
  isOpenDeleteModal: false,
};

export default function schedule(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@schedule/ADD_NEW_CONTACT':
      return { ...state, contacts: [...state.contacts, action.payload] };
    case '@schedule/SHOW_CONTACT_MODAL':
      return { ...state, isOpenContactModal: action.payload };
    default:
      return state;
  }
}
