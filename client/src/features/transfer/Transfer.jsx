import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import Modal from '../../components/modal';
import BaseUI from '../../features/base';
import Header from '../../components/header';
import BankList from './BankList';
import AccountField from './AccountField';
import AccountNameField from './AccountNameField';
import AmountField from './AmountField';
import NarrationField from './NarrationField';
import Confirmation from '../confirmation';
// import AuthService from ""

import postTransferClient from '../../redux/actionCreators/postTransferClient';

const Transfer = ({
  postTransferClient,
  account_number,
  account_name,
  bank_code,
  description,
  status,
}) => {
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    setClicked(status);
  }, [status]);
  const handleSubmit = e => {
    postTransferClient(account_name, description, account_number, bank_code);
    if (status) {
      setClicked(true);
    }
  };

  return (
    <BaseUI>
      {(status || clicked) && (
        <Modal>
          <Confirmation />
        </Modal>
      )}
      <div>
        <Header text="Funds Transfer" />
        <BankList />
        <AccountField />
        <AccountNameField />
        <AmountField />
        <NarrationField />
        <button
          data-target="#modal"
          data-toggle="modal"
          className="btn btn-outline-secondary btn-lg"
          onClick={handleSubmit}
        >
          Process Transfer
        </button>
      </div>
    </BaseUI>
  );
};

const mapStateToProps = ({
  getBeneficiaryNameReducer: {
    data: { account_number, account_name },
  },
  selectedBankReducer: {
    selectedBank: { bank_code },
  },
  setDescriptionReducer: { description },
  postTransferClientReducer: { status },
}) => ({ account_number, account_name, bank_code, description, status });
export default connect(
  mapStateToProps,
  {
    postTransferClient,
  },
)(Transfer);
