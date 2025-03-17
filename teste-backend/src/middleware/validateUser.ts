import { Request, Response, NextFunction } from "express";
import Joi from "joi";
import { cpf, cnpj } from "cpf-cnpj-validator";

const userSchema = Joi.object({
  person_type: Joi.string().valid("PHYSICS", "JURIDIC").required(),
  cnpj: Joi.string()
    .custom((value, helpers) => {
      if (!cnpj.isValid(value)) return helpers.error("any.invalid");
      return value;
    })
    .when("person_type", {
      is: "JURIDIC",
      then: Joi.required(),
      otherwise: Joi.forbidden(),
    }),
  responsibleCpf: Joi.string()
    .custom((value, helpers) => {
      if (!cpf.isValid(value)) return helpers.error("any.invalid");
      return value;
    })
    .when("person_type", {
      is: "JURIDIC",
      then: Joi.required(),
      otherwise: Joi.forbidden(),
    }),
  name: Joi.string().min(3).max(255).required(),
  mobile: Joi.string()
    .pattern(/^\d{10,11}$/)
    .optional(),
  phone: Joi.string()
    .pattern(/^\d{10,11}$/)
    .optional(),
  email: Joi.string().email().required(),
  zip_code: Joi.string()
    .pattern(/^\d{5}-?\d{3}$/)
    .optional(),
  street: Joi.string().optional(),
  number: Joi.string().optional(),
  complement: Joi.string().optional(),
  city: Joi.string().optional(),
  neighborhood: Joi.string().optional(),
  state: Joi.string().length(2).uppercase().optional(),
  terms: Joi.boolean().valid(true).required(),
});

export const validateUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { error } = userSchema.validate(req.body, { abortEarly: false });

  if (error) {
    return res.status(400).json({
      errors: error.details.map((detail) => detail.message),
    });
  }

  next();
};
