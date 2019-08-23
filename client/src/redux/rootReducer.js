import { combineReducers } from 'redux';
import getBeneficiaryNameReducer from './reducers/getBeneficiaryNameReducer';
import getBanksReducer from './reducers/getBanksReducer';
import selectedBankReducer from './reducers/selectedBankReducer';
import setAmountReducer from './reducers/setAmountReducer';
import setDescriptionReducer from './reducers/setDescriptionReducer';
import postTransferClientReducer from './reducers/postTransferClientReducer';
import postTransferReducer from './reducers/postTransferReducer';
import postTransferFinalizeReducer from './reducers/postTransferFinalizeReducer';

export default combineReducers({
  getBanksReducer,
  selectedBankReducer,
  getBeneficiaryNameReducer,
  setAmountReducer,
  setDescriptionReducer,
  postTransferClientReducer,
  postTransferReducer,
  postTransferFinalizeReducer,
});
