const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv/config');

exports.signup = (req, res) => {
  User.find({ email: req.body.email })
    .exec()
    .then(user => {
      if (user.length >= 1) {
        res.json({
          status: false,
          message: 'User already exists',
        });
      } else {
        bcrypt.hash(req.body.password, 10, (error, hash) => {
          if (error) {
            return res.json({
              status: false,
              error,
            });
          } else {
            const user = new User({
              name: req.body.name,
              password: hash,
              email: req.body.email,
            });
            user
              .save()
              .then(response =>
                res.json({
                  status: true,
                  message: 'User created!',
                  data: response,
                }),
              )
              .catch(error =>
                res.json({
                  status: false,
                  error,
                }),
              );
          }
        });
      }
    })
    .catch(error =>
      res.json({
        status: false,
        error,
      }),
    );
};

exports.signin = (req, res) => {
  User.find({ email: req.body.email })
    .exec()
    .then(user => {
      if (user.length < 1) {
        res.json({
          status: false,
          message: 'Authentication failed',
        });
      } else {
        bcrypt.compare(
          req.body.password,
          user[0].password,
          (error, response) => {
            if (error) {
              res.json({
                status: false,
                message: 'Authentication failed',
              });
            } else {
              if (response) {
                const token = jwt.sign(
                  {
                    email: user[0].email,
                    userId: user[0]._id,
                    name: user[0]._name,
                  },
                  process.env.JWT_SECRET_KEY,
                  {
                    expiresIn: '1h',
                  },
                );
                res.json({
                  status: true,
                  message: 'Authentication successful',
                  token,
                });
              } else {
                res.json({
                  status: false,
                  message: 'Authentication failed',
                });
              }
            }
          },
        );
      }
    })
    .catch(error =>
      res.json({
        status: false,
        error,
      }),
    );
};
