import { NextFunction, Request, Response } from "express";
import {validationResult} from 'express-validator'

export const verifyError = (req:Request, resp:Response, next:NextFunction) => {

    const errors = validationResult(req)

    if(!errors.isEmpty()){

        return resp.status(401).json(errors)
    }

    next()

}