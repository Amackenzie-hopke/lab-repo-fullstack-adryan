import Joi from "joi";
import {  requiredNumber, requiredString } from "../validations/validationHelper";


export const employeeSchema = Joi.object({
  id: Joi.string().forbidden(),
  name: requiredString("Name").min(3),
  department: requiredString("Department"),
  updatedAt: Joi.date().forbidden(),
  createdAt: Joi.date().forbidden(),
}).options({ allowUnknown: false });

