import "reflect-metadata";
import { Request, Response } from "express";
import * as EmployeeService from "../services/employeeService";
import { errorResponse, successResponse } from "../models/responseModel";
import { Controller, Delete, Get, Param, Post, Put, Req, Res, UseBefore } from "routing-controllers";
import { employeeSchema } from "../validations/employeeValidations";
import { validateRequest } from "../middleware/validate";
import * as UserService from "../services/userService";
import { getAuth, requireAuth } from "@clerk/express";
import { findOrCreateUser } from "../middleware/findOrCreateUser";


@Controller()
export class EmployeeController {
  @Get("/employees")
  @UseBefore(findOrCreateUser, requireAuth())
  async getAll(@Req() req:Request, @Res() res: Response) {
    try {
      const auth = getAuth(req);
      const userId = auth.userId;


       if (!userId) {
        res.status(403).json(errorResponse("Cannot fetch user saved recipes, userId is not set"));
      } else {
      
      const employees = await EmployeeService.fetchAllEmployees();
      return res.status(200).json(successResponse(employees, "Employees retrieved successfully"));
      }
    } catch (error) {
      throw error;
    }
  }
  @Get("/employees/:id")
  @UseBefore(findOrCreateUser, requireAuth())
  async getById(@Param("id") id: string, @Req() req: Request, @Res() res: Response) {
    try {
      const auth = getAuth(req);
      const userId = auth.userId;
       if (!userId) {
        res.status(403).json(errorResponse("Cannot fetch user saved recipes, userId is not set"));
      } else {
          const employee = await EmployeeService.getEmployeeById(id);
            
          if (employee) {
            return res.status(200).json(successResponse(employee, "Employee retrieved successfully"));
          } else {
            return res.status(404).json(errorResponse("Employee not found"));
          }
    }
    } catch (error) {
      throw error;
    }
  }

  @Post("/employees/create")
  @UseBefore(findOrCreateUser, requireAuth())
  @UseBefore(validateRequest(employeeSchema))
  async createEmployee(@Req() req: Request, @Res() res: Response) {
    try {
      const auth = getAuth(req);
      const userId = auth.userId;
       if (!userId) {
        res.status(403).json(errorResponse("Cannot fetch user saved recipes, userId is not set"));
      } else {
      const newEmployee = await EmployeeService.createEmployee(req.body);
      res.status(201).json(successResponse(newEmployee, "Employee created succesfully"));
      }
    } catch (error) {
      throw error;
    }
  }

}