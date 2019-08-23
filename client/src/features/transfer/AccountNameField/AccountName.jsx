import React from 'react';
import { connect } from 'react-redux';

import InputGroup from '../../../components/input/InputGroup';

const AccountName = ({ account_name }) => {
  return (
    <InputGroup
      type="text"
      label="Account Name"
      handleChange={() => {}}
      disabled
      value={account_name}
    />
  );
};
const mapStateToProps = ({
  getBeneficiaryNameReducer: {
    data: { account_name },
  },
}) => ({ account_name });
export default connect(mapStateToProps)(AccountName);
