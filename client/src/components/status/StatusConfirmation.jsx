import React from 'react';

import SuccessSVG, { FailSVG } from './StatusSVG';

const StatusConfirmation = ({ status }) => {
  return status ? <SuccessSVG /> : <FailSVG />;
};

export default StatusConfirmation;
