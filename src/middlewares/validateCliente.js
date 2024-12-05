const Joi = require('joi');

const clienteSchema = Joi.object({
  Nome_Cliente: Joi.string().required(),
  Email: Joi.string().email().required(),
});

module.exports = (req, res, next) => {
  const { error } = clienteSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};
