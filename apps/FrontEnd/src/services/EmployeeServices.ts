/*
This file contains service functions that bridge our repository CRUD manipulation backend code with our hooks and componenets

Services are also responsible for validation logic before passing requests from the front end to back end

validations
  - employee name cannot be less then three characters
  - department name cannot be blank
*/

import * as employeeRepo from "../apis/employeeRepo";
import type { Employee } from "../data/Employees/employeeInterface";

export async function fetchEmployees(token: string) {
  const employees = await employeeRepo.getEmployees(token);
  return employees;
}

export async function createNewEmployee(employee: Employee,token: string) {
  return await employeeRepo.createEmployee(employee,token);
}


 
export async function validateEmployee(employee: Employee) {
  const validationErrors = new Map<string, string>();

  if (employee.name?.trim().length < 3)  validationErrors.set("name", "Name must Contain a minimum of three characters");
  
  if (!employee.department?.trim()) validationErrors.set("department", "Department must be defined");

  return validationErrors;
}
