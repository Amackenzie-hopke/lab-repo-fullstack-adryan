import prisma from "../../../../prisma/client";
import { EmployeeDto } from "../types/employeeDto";
import { formatEmployee } from "../utils/formatEmployee";

export const fetchAllEmployees = async (): Promise<EmployeeDto[]> => {
  const data = await prisma.employee.findMany({
    include: {
      department: true,
    },
  });

  return data.map((x) => formatEmployee(x));
};

export const getEmployeeById = async (id: string): Promise<EmployeeDto | null> => {
  try {
    const data = await prisma.employee.findUnique({
      where: {
        id: id,
      },
      include: {
        department: true,
      },
    });

    if (!data) {
      return null;
    } else {
      return formatEmployee(data);
    }
  } catch (error) {
    throw new Error(`Failed to fetch Employee with id ${id}`);
  }
};

export const createEmployee = async (employeeDto: EmployeeDto): Promise<EmployeeDto> => {
  const { id,name,department, updatedAt, createdAt } = employeeDto;

  // creates new department if supplied one does not exist
  let departmenent = await prisma.department.findFirst({ where: { name: department } });
  if (!departmenent) {
    departmenent = await prisma.department.create({ data: { name: department } });
  }

  const data = await prisma.employee.create({
    data: {
        id,
        name,
        departmentId:departmenent.id,
        updatedAt, 
        createdAt
    },
    include: {department:true}
  });

  return formatEmployee(data);
};


