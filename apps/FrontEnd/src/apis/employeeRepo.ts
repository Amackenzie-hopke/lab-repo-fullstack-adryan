/*
This file contains repository functions that execute crud logic, these should be triggered by service layer functions only

this code currently only makes changes to a in memory typescript collection 
meaning it will re-render back to the static collection default upon a page reload

Current CRUD functions 
- get all (returns entire collection) 
- Create (pushes employee data) 
- update (tries to locate employee with requested index and replace employee object with matching id)
- delete (deletes a employee object in collection using splice and targetting by id)
*/


import { employeeData } from "../data/Employees/employees";
import type { Employee } from "../data/Employees/employeeInterface";

export function getEmployees() {
  return employeeData;
}


export async function createEmployee(employee: Employee) {
  employeeData.push(employee);
  return employee;
}

export async function updateEmployee(employee: Employee) {
  const index = employeeData.findIndex((emp) => emp.id === employee.id);

  if (index !== -1) {
    throw new Error(`Failed to update employee with ${employee}`);
  }

  employeeData[index] = employee;
  return employeeData[index];
}

export async function deleteEmployee(employee: Employee) {
  const index = employeeData.findIndex(emp => emp.id === employee.id);

  if (index !== -1) {
    employeeData.splice(index, 1);
  }

  return employee;
}


