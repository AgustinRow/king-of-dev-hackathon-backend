import * as Joi from 'joi';

const walletAddressValidation = Joi.object().keys({
  walletAddress: Joi.string()
    .pattern(/^0x[a-fA-F0-9]{40}$/)
    .required()
    .messages({
      'any.required': 'walletAddress is required by the model',
      'string.pattern.base': 'wallet address must have valid format (0x..)',
    }),
});

export default walletAddressValidation;
