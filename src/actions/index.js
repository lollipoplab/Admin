const READ_ITEM = 'READ_ITEM';

export const readItem = data => ({
  // This action fetches data
  // @author Richard Ong <richard.ong@lollipoplab.io>

  type: READ_ITEM,
  data: data
});
