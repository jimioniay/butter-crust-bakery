import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import getBanks from '../../../redux/actionCreators/getBanks';
import selectedBank from '../../../redux/actionCreators/selectedBank';
import Spinner from '../../../components/spinner';
import Option from './Option';

const BankList = ({ getBanks, spinner, status, bankList, selectedBank }) => {
  const [form, setForm] = useState({
    bank_code: '',
    bank_name: '',
  });

  useEffect(() => {
    getBanks();
  }, []);

  useEffect(() => {
    let isCurrent = true;
    selectedBank(form, () => {
      isCurrent ? setForm(form) : (isCurrent = false);
    });
  }, [form]);

  const handleChange = e => {
    setForm({
      bank_code: e.target.value.split('|')[0],
      bank_name: e.target.value.split('|')[1],
    });
  };
  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <label className="input-group-text" htmlFor="inputGroupSelect01">
          Bank
        </label>
      </div>
      <select
        className="custom-select"
        id="inputGroupSelect01"
        onChange={handleChange}
      >
        {status ? (
          bankList.map(item => (
            <Option
              key={item.code}
              code={`${item.code}|${item.name}`}
              name={item.name}
              value={form.value}
            />
          ))
        ) : (
          <option>Choose...</option>
        )}
      </select>
      {spinner && <Spinner />}
    </div>
  );
};

const mapStateToProps = ({
  getBanksReducer: { spinner, status, message, bankList },
}) => ({ spinner, status, message, bankList });

export default connect(
  mapStateToProps,
  {
    getBanks,
    selectedBank,
  },
)(BankList);
