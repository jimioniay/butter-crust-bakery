const axios = require('../api');

exports.getBanks = async (req, res) => {
  try {
    const response = await axios({
      method: 'GET',
      url: '/bank',
    });
    res.json(response.data);
  } catch (error) {
    res.json(
      error.response.data === undefined
        ? error.response === undefined
          ? error === undefined
            ? {
                status: false,
                message: 'An unhanled error occured. Please try again later.',
              }
            : error
          : error.response
        : error.response.data,
    );
  }
};

exports.getBeneficiaryName =  async (req, res) => {
    try {
      const response = await axios({
        method: 'GET',
        url: `/bank/resolve?account_number=${
          req.query.account_number
        }&bank_code=${req.query.bank_code}`,
      });
      res.json(response.data);
    } catch (error) {
      res.json(error.response.data);
    }
  }

  exports.postTransaction = async (req, res) => {
    if (process.env.HANDLE_PAYSTACK_FAILED_RESPONSE === 'TRUE') {
      return res.json({
        status: true,
        message: 'Transfer requires OTP to continue',
        data: {
          integration: 100073,
          domain: 'test',
          amount: 3794800,
          currency: 'NGN',
          source: 'balance',
          reason: 'Calm down',
          recipient: 28,
          status: 'otp',
          transfer_code: 'TRF_1ptvuv321ahaa7q',
          id: 14,
          createdAt: '2017-02-03T17:21:54.508Z',
          updatedAt: '2017-02-03T17:21:54.508Z',
        },
      });
    } else {
      try {
        const response = await axios({
          method: 'POST',
          url: '/transfer',
          data: {
            source: 'balance',
            reason: req.body.description,
            amount: req.body.amount,
            recipient: req.body.recipient,
          },
        });
        res.json(response.data);
      } catch (error) {
        res.json(
          error.response.data === undefined
            ? error.response
            : error.response.data || error,
        );
      }
    }
  }

  exports.postTransactionClient = async (req, res) => {
    try {
      const response = await axios({
        method: 'POST',
        url: '/transferrecipient',
        data: {
          type: 'nuban',
          name: req.body.name,
          description: req.body.description,
          account_number: req.body.account_number,
          bank_code: req.body.bank_code,
          currency: 'NGN',
        },
      });
      res.json(response.data);
    } catch (error) {
      res.json(error.response.data);
    }
  }

  exports.postTransactionFinalize = async (req, res) => {
    if (process.env.HANDLE_PAYSTACK_FAILED_RESPONSE === 'TRUE') {
      res.json({
        status: true,
        message: 'Transfer has been queued',
        data: {
          domain: 'test',
          amount: 1000000,
          currency: 'NGN',
          reference: 'n7ll9pzl6b',
          source: 'balance',
          source_details: null,
          reason: 'E go better for you',
          status: 'success',
          failures: null,
          transfer_code: 'TRF_zuirlnr9qblgfko',
          titan_code: null,
          transferred_at: null,
          id: 529410,
          integration: 123460,
          recipient: 225204,
          createdAt: '2018-08-02T10:02:55.000Z',
          updatedAt: '2018-08-02T10:12:05.000Z',
        },
      });
    } else {
      try {
        const response = await axios({
          method: 'POST',
          url: '/transfer/finalize_transfer',
          data: {
            transfer_code: req.body.transfer_code,
            otp: req.body.otp,
          },
        });
        res.json(response.data);
      } catch (error) {
        res.json(error.response.data);
      }
    }
  }