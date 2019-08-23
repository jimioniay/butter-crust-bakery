import React, { useState } from 'react';
import { connect } from 'react-redux';

import setDescription from '../../../redux/actionCreators/setDescription';
import InputGroup from '../../../components/input/InputGroup';

const NarrationField = ({ setDescription }) => {
  const [form, setForm] = useState({
    narration: '',
  });

  const handleChange = e => {
    setForm({
      narration: e.target.value,
    });
    setDescription(e.target.value);
  };
  return (
    <InputGroup
      name="narration"
      type="text"
      label="Narration"
      handleChange={handleChange}
      value={form.narration}
    />
  );
};
export default connect(
  null,
  {
    setDescription,
  },
)(NarrationField);
