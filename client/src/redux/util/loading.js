import loadingAction from 'Redux/actionCreators/loadingAction';

const loading = (type, payload) => loadingAction(`${type}_LOADER`, payload);

export default loading;
