import React, { useState } from 'react';
import { connect } from 'react-redux';

import InputGroup from '../../../components/input/InputGroup';
import setAmount from '../../../redux/actionCreators/setAmount';

const AmountField = ({ formmatedAmount, setAmount, status }) => {
  const [amount, setAmountState] = useState({
    unFormattedAmount: '0',
    formmatedAmount,
  });

  const handleChange = e => {
    setAmountState({
      unFormattedAmount: e.target.value,
    });
    setAmount(e.target.value);
  };
  return (
    <InputGroup
      type="string"
      label="Amount"
      handleChange={handleChange}
      value={amount.unFormattedAmount}
    />
  );
};
const mapStateToProps = ({
  setAmountReducer: {
    status,
    data: { formmatedAmount },
  },
}) => ({
  status,
  formmatedAmount,
});
export default connect(
  mapStateToProps,
  {
    setAmount,
  },
)(AmountField);
