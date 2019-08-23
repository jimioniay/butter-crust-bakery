import React, { Fragment } from 'react';

import StatusConfirmation from '../../components/status';

const PostStatus = ({ status, message }) => (
  <Fragment>
    <div className="confirm-response">
      <div className="confirm-response-content">
        <StatusConfirmation status={status} />
        <p className={status ? 'text-success muted' : 'text-danger muted'}>
          {message}
        </p>
      </div>
    </div>
  </Fragment>
);

export default PostStatus;
