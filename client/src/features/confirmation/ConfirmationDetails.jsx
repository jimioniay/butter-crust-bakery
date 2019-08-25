import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';

import postTransfer from '../../redux/actionCreators/postTransfer';
import postTransferFinalize from '../../redux/actionCreators/postTransferFinalize';

const ConfirmationDetails = ({
  account_number,
  account_name,
  bank_name,
  formattedAmount,
  amountInKobo,
  description,
  postTransfer,
  status,
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
    receipient: 'RCP_to8csrvathbziq1',
    OTP: data.OTP,
  };

  const requestBodyFinalize = {
    transfer_code: '',
    otp: data.OTP,
  };
  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
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
  postTransferReducer: {
    status,
    data: { status: postTransferStatus },
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
