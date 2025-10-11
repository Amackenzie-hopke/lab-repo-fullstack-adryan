import * as employeeRepo from "../apis/employeeRepo";
import type { Employee } from "../data/Employees/employeeInterface";

export async function fetchEmployees() {
  const employees = await employeeRepo.getEmployees();
  return employees;
}

export async function createNewRecipe(employee: Employee) {
  return await employeeRepo.createEmployee(employee);
}

export async function updateEmployee(employee: Employee) {
  return await employeeRepo.updateEmployee(employee);
}



export async function validateEmployee(employee: Employee) {
  const validationErrors = new Map<string, string>();

  if (!employee.name?.trim()) validationErrors.set("name", "Name must be defined");
  if (!employee.department?.trim()) validationErrors.set("description", "Description must be defined");

  return validationErrors;
}
