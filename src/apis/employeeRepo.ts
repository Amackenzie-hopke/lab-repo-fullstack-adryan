import { employeeData } from "../data/Employees/employees";
import type { Employee } from "../data/Employees/employeeInterface";

export function getEmployees() {
  return employeeData;
}

export function getEmployeebyId(employeeID: string): Employee {
  const foundEmployee = employeeData.find((t) => t.id === employeeID);

  if (!foundEmployee) {
    throw new Error(`Failed to fetch employee named ${employeeID}`);
  }

  return foundEmployee;
}

export async function createEmployee(employee: Employee) {
  employeeData.push(employee);
  return employee;
}

export async function updateEmployee(employee: Employee) {
  const foundRecipeIndex = employeeData.findIndex((t) => t.id === employee.id);

  if (foundRecipeIndex === -1) {
    throw new Error(`Failed to update recipe with ${employee}`);
  }

  employeeData[foundRecipeIndex] = employee;
  return employeeData[foundRecipeIndex];
}

