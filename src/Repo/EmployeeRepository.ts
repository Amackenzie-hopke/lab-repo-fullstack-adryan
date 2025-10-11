import type { Employee } from "../data/Employees/employeeInterface";
import { employeeData } from "../data/Employees/employees.ts";



export async function createRecipe(employee: Employee) {
  employeeData.push(employee);
  return employee;
}


