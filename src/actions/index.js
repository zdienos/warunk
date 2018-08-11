//get Application information
function getAppsInfo() {
  return dispatch => {
  	console.log('setting Dispatch');
    dispatch(request());

      Realm.open({
        schema: [WarunkSchema]
      }).then(data => dispatch(success(data)), error => dispatch(failure(error)));
    };

  function request() {
    return { type: 'SETTINGS_REQUEST' };
  }
  function success(data) {
    return { type: 'SETTINGS_SUCCESS', data };
  }
  function failure(error) {
    return { type: 'SETTINGS_FAILURE', error };
  }
}


//generate infoice number for new transaction
function generateInfoiceNumber() {
  return dispatch => {
    dispatch(request());

    generalService
      .getSetting(id)
      .then(data => dispatch(success(data)), error => dispatch(failure(error)));
  };

  function request() {
    return { type: 'INFOICE_REQUEST' };
  }
  function success(data) {
    return { type: 'INFOICE_SUCCESS', data };
  }
  function failure(error) {
    return { type: 'INFOICE_FAILURE', error };
  }
}
