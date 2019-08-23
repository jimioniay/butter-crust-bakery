import React from 'react';
import { connect } from 'react-redux';

import Header from '../../components/header';
import ConfirmationDetails from './ConfirmationDetails';
import PostStatus from './PostStatus';
import PreStatus from './PreStatus';
import Spinner from '../../components/spinner';

import './confirmation.css';

const Confirmation = ({
  spinner,
  preStatus,
  preMessage,
  finalSpinner,
  status,
  message,
}) => {
  return (
    <div className="container padding">
      <Header text="Transaction Confirmation" classnames="small-header" />
      {(spinner || finalSpinner) && <Spinner />}
      {message.length > 0 && status && (
        <PostStatus status={status} message={message} />
      )}
      {preMessage.length > 0 && status === false && (
        <PreStatus status={preStatus} message={preMessage} />
      )}
      <ConfirmationDetails />
    </div>
  );
};

const mapStateToProps = ({
  postTransferReducer: { spinner, status: preStatus, message: preMessage },
  postTransferFinalizeReducer: { spinner: finalSpinner, status, message },
}) => ({ spinner, preStatus, preMessage, finalSpinner, status, message });
export default connect(
  mapStateToProps,
  null,
)(Confirmation);
