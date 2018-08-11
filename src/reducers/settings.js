export function settings(state = {}, action) {
  switch (action.type) {
    case 'SETTINGS_SUCCESS':
      return {
        payload: action.data,
      };
    case 'SETTINGS_ERROR':
      return {};
    default:
      return state
  }
}