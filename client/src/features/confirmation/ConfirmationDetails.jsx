import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import postTransfer from '../../redux/actionCreators/postTransfer';
import postTransferFinalize from '../../redux/actionCreators/postTransferFinalize';
import Paystack from '../../components/common/Paystack';

const ConfirmationDetails = ({
  account_number,
  account_name,
  bank_name,
  formattedAmount,
  amountInKobo,
  description,
  postTransfer,
  status,
  receipient_code,
  transfer_code,
  postTransferStatus,
  postTransferFinalize,
  finalStatus,
}) => {
  const [data, setData] = useState({
    OTP: '',
    checked: false,
  });
  const handleOTPChange = e => {
    setData({
      ...data,
      OTP: e.target.type === 'text' ? e.target.value : '',
    });
  };
  const handleChange = e => {
    setData({
      ...data,
      checked: e.target.type === 'checkbox' ? e.target.checked : null,
    });
    if (e.target.checked) {
      postTransfer(requestBody);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    postTransferFinalize(requestBodyFinalize);
  };
  const requestBody = {
    description,
    amount: amountInKobo,
    receipient: receipient_code,
    OTP: data.OTP,
  };

  const requestBodyFinalize = {
    transfer_code,
    otp: data.OTP,
  };
  return (
    <Fragment>
      <form onSubmit={handleSubmit} className="mb-4">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span>Beneficiary Name: </span>
            {account_name}
          </li>
          <li className="list-group-item">
            <span>Beneficiary Account: </span>
            {account_number}
          </li>
          <li className="list-group-item">
            <span>Beneficiary Bank: </span>
            {bank_name}
          </li>
          <li className="list-group-item">
            <span>Amount: </span>
            {formattedAmount}
          </li>
          <li className="list-group-item">
            <span>Description: </span>
            {description}
          </li>
          <li className="list-group-item">
            <div className="d-flex justify-content-start">
              <div className="form-group form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                  onChange={handleChange}
                  checked={data.checked}
                  disabled={postTransferStatus}
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  {`By clicking this checkbox you confirm transaction to ${account_name}.`}
                </label>
              </div>
            </div>
          </li>
          {status && postTransferStatus === 'otp' && (
            <input
              className="form-control mt-2 mb-4"
              type="text"
              placeholder="Please supply OTP sent to your email here."
              onChange={handleOTPChange}
              value={data.OTP}
              disabled={finalStatus}
            />
          )}
        </ul>
        <button
          id="sample"
          className="btn btn-outline-secondary btn-lg"
          onClick={() => null}
          disabled={!status || finalStatus}
        >
          Submit Transaction
        </button>
      </form>
      <div>
        <span
          className="muted"
          style={{ fontSize: '10px', fontStyle: 'italic', color: '#20303c' }}
        >
          powered by <Paystack />
        </span>
      </div>
    </Fragment>
  );
};

const mapStateToProps = ({
  getBeneficiaryNameReducer: {
    data: { account_number, account_name },
  },
  selectedBankReducer: {
    selectedBank: { bank_name },
  },
  setAmountReducer: {
    data: { formattedAmount, amountInKobo },
  },
  setDescriptionReducer: { description },
  postTransferClientReducer: {
    data: { receipient_code },
  },
  postTransferReducer: {
    status,
    data: { status: postTransferStatus, transfer_code },
  },
  postTransferFinalizeReducer: { status: finalStatus },
}) => ({
  account_number,
  account_name,
  bank_name,
  formattedAmount,
  amountInKobo,
  description,
  status,
  receipient_code,
  transfer_code,
  postTransferStatus,
  finalStatus,
});

export default connect(
  mapStateToProps,
  {
    postTransfer,
    postTransferFinalize,
  },
)(ConfirmationDetails);

ConfirmationDetails.defaultProps = {
  account_number: '',
  account_name: '',
  bank_name: '',
  formattedAmount: '',
  amountInKobo: 0,
  description: '',
  postTransfer: () => {},
  status: false,
  receipient_code: '',
  transfer_code: '',
  postTransferStatus: '',
  postTransferFinalize: () => {},
  finalStatus: false,
};

ConfirmationDetails.propTypes = {
  account_number: PropTypes.string.isRequired,
  account_name: PropTypes.string.isRequired,
  bank_name: PropTypes.string.isRequired,
  formattedAmount: PropTypes.string.isRequired,
  amountInKobo: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  postTransfer: PropTypes.func,
  status: PropTypes.bool.isRequired,
  receipient_code: PropTypes.string.isRequired,
  transfer_code: PropTypes.string.isRequired,
  postTransferStatus: PropTypes.string.isRequired,
  postTransferFinalize: PropTypes.func,
  finalStatus: PropTypes.bool.isRequired,
};
