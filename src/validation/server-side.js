const Joi = require('joi');

const loginValidation = {
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
};

const signupValidation = {
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),

};

module.exports = {
  loginValidation,
  signupValidation
}
