import "reflect-metadata";
import { Request, Response } from "express";
import * as EmployeeService from "../services/employeeService";
import { errorResponse, successResponse } from "../models/responseModel";
import { Controller, Delete, Get, Param, Post, Put, Req, Res, UseBefore } from "routing-controllers";
import { employeeSchema } from "../validations/employeeValidations";
import { validateRequest } from "../middleware/validate";

@Controller()
export class EmployeeController {
  @Get("/employees")
  async getAll(@Req() req, @Res() res: Response) {
    try {
      const employees = await EmployeeService.fetchAllEmployees();
      return res.status(200).json(successResponse(employees, "Employees retrieved successfully"));
    } catch (error) {
      throw error;
    }
  }
  @Get("/employees/:id")
  async getById(@Param("id") id: string, @Req() req: Request, @Res() res: Response) {
    try {
      const employee = await EmployeeService.getEmployeeById(id);
      if (employee) {
        return res.status(200).json(successResponse(employee, "Employee retrieved successfully"));
      } else {
        return res.status(404).json(errorResponse("Employee not found"));
      }
    } catch (error) {
      throw error;
    }
  }

  @Post("/employees/create")
  @UseBefore(validateRequest(employeeSchema))
  async createEmployee(@Req() req: Request, @Res() res: Response) {
    try {
      const newEmployee = await EmployeeService.createEmployee(req.body);
      res.status(201).json(successResponse(newEmployee, "Employee created succesfully"));
    } catch (error) {
      throw error;
    }
  }

}