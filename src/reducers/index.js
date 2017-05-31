const TOGGLE_NAVIGATION = 'TOGGLE_NAVIGATION';
const ADD_ITEM_STATUS = 'ADD_ITEM_STATUS';
const READ_ITEM_STATUS = 'READ_ITEM_STATUS';

export const readItem = (state, action) => {
  // This reducer fetches data
  // @author Richard Ong <richard.ong@lollipoplab.io>

  switch (action.type) {
    case READ_ITEM_STATUS:
      return action.data;
    default:
      return state || '';
  }
};
