const Joi = require('joi');

const signupValidation = {
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),

};

module.exports = {
  signupValidation
}
