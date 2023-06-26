import { Request } from "express";
import { Document } from "mongoose";
import Users from "./models/Users";

declare module "express" {
  interface Request {
    user?: Document & Users;
  }
}