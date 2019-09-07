import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';

import Modal from '../../components/modal';
import DismissModal from '../../components/modal/DismissModal';
import BaseUI from '../../features/base';
import Header from '../../components/header';
import BankList from './BankList';
import AccountField from './AccountField';
import AccountNameField from './AccountNameField';
import AmountField from './AmountField';
import NarrationField from './NarrationField';
import Confirmation from '../confirmation';
import AuthService from '../../redux/util/authServices';

import postTransferClient from '../../redux/actionCreators/postTransferClient';

const Transfer = ({
  postTransferClient,
  account_number,
  account_name,
  bank_code,
  description,
  status,
  amountInKobo,
  history: { push },
}) => {
  useEffect(() => {
    if (!AuthService.isAuthenticated()) {
      push('/user/signin');
    }
  }, []);

  const handleSubmit = e => {
    if (
      account_name.length > 0 &&
      description.length > 0 &&
      account_number.length === 10 &&
      bank_code.length > 0
    ) {
      amountInKobo >= 100
        ? postTransferClient(
            account_name,
            description,
            account_number,
            bank_code,
          )
        : toast.warn('Please supply an amount greater than N0.00');
    } else {
      toast.warn('Please ensure all fields are supplied');
    }
  };

  return (
    <BaseUI>
      {status && (
        <Modal>
          <DismissModal classnames="float-right" />
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
  setAmountReducer: {
    data: { amountInKobo },
  },
  postTransferClientReducer: { status },
}) => ({
  account_number,
  account_name,
  bank_code,
  description,
  status,
  amountInKobo,
});
export default connect(
  mapStateToProps,
  {
    postTransferClient,
  },
)(Transfer);
