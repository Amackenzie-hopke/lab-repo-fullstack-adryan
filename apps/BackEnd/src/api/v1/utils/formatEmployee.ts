import { Employee, Department } from "../../../../prisma/generated/prisma";
import { EmployeeDto } from "../types/employeeDto";

//This function will map the data to the EmployeeDto object the front end will expect returned
export function formatEmployee(employee: Employee &  {department: Department} ): EmployeeDto {
  return {
    id: employee.id,
    name: employee.name,
    department: employee.department.name,
  };
}