import React, { useState } from 'react';
import { connect } from 'react-redux';

import InputGroup from '../../../components/input/InputGroup';
import getBeneficiaryName from '../../../redux/actionCreators/getBeneficiaryName';
import Spinner from '../../../components/spinner';

const AccountField = ({ bank_code, spinner, getBeneficiaryName }) => {
  const [form, setForm] = useState({
    data: {
      account_number: '',
    },
  });
  const handleChange = e => {
    const { value } = e.target;
    setForm({
      data: {
        account_number: value,
      },
    });
    if (value.length === 10) {
      getBeneficiaryName(value, bank_code);
    }
  };
  return (
    <div className="d-flex">
      <InputGroup
        name="account_number"
        type="number"
        label="Account Number"
        handleChange={handleChange}
        value={form.data.account_number}
        maxLength="10"
      />
      {spinner && <Spinner />}
    </div>
  );
};
const mapStateToProps = ({
  selectedBankReducer: {
    selectedBank: { bank_code },
  },
  getBeneficiaryNameReducer: { spinner },
}) => ({
  bank_code,
  spinner,
});
export default connect(
  mapStateToProps,
  {
    getBeneficiaryName,
  },
)(AccountField);
