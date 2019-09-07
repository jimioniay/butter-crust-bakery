const express = require('express');
const router = express.Router();
const transferController = require('../controllers/transfer');
const checkAuthorization = require('../auth/check-auth');

router.get('/getBanks', checkAuthorization, transferController.getBanks);

router.get(
  '/getBeneficiaryName',
  checkAuthorization,
  transferController.getBeneficiaryName,
);

router.post(
  '/postTransaction',
  checkAuthorization,
  transferController.postTransaction,
);

router.post(
  '/postTransactionClient',
  checkAuthorization,
  transferController.postTransactionClient,
);

router.post(
  '/postTransactionFinalize',
  checkAuthorization,
  transferController.postTransactionFinalize,
);
module.exports = router;
