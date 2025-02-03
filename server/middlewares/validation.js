const Joi = require('joi');

const verifySignUp = (req, res, next) => {
  const Schema = Joi.object({
    name: Joi.string().min(3).max(15).required(),
    email: Joi.string().email().required(),
    role: Joi.string().valid('ROLE_USER', 'ROLE_ADMIN').default('ROLE_USER'),
    password: Joi.string()
    .min(8)
    .max(20)
    .pattern(new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$"))
    .required()
    .messages({
      "string.pattern.base":
        "Password must contain at least 1 uppercase, 1 lowercase, 1 number, and 1 special character (!@#$%^&*).",
    }),
  });
  const { error } = Schema.validate(req.body, { abortEarly: false });
  if (error) {
    console.log(error)
    const errorMessages = error.details.map(detail => detail.message);
    return res.status(400).json({
      message: 'Invalid Data Entry',
      errors: errorMessages,
    });
  }
  next();
};

const verifyLogin = (req, res, next) => {
  const Schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string()
    .min(8)
    .max(20)
    .pattern(new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$"))
    .required()
    .messages({
      "string.pattern.base":
        "Password must contain at least 1 uppercase, 1 lowercase, 1 number, and 1 special character (!@#$%^&*).",
    }),
  });
  const { error } = Schema.validate(req.body);
  if (error) {
    console.log(error)
    return res.status(400).json({ message: 'Invalid Data Entry', error: error.details[0].message });
  }
  next();
};
const verifyReset = (req, res, next) => {
  const Schema = Joi.object({
    password: Joi.string()
    .min(8)
    .max(20)
    .pattern(new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$"))
    .required()
    .messages({
      "string.pattern.base":
        "Password must contain at least 1 uppercase, 1 lowercase, 1 number, and 1 special character (!@#$%^&*).",
    }),
  });
  const { error } = Schema.validate(req.body);
  if (error) {
    console.log(error)
    return res.status(400).json({ message: 'Invalid Data Entry', error: error.details[0].message });
  }
  next();
};

module.exports = {
  verifySignUp,
  verifyLogin,
  verifyReset
}