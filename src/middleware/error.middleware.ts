// error.middleware.ts

import { ResponseError } from "../responses/error.response";
import { NextFunction, Request, Response } from "express";
import { ValidationError } from "joi";

const errorMiddleware = async (err: Error, req: Request, res: Response, next: NextFunction) => {
    if (!err) {
        next();
        return;
    }
    if (err instanceof ResponseError) {
        return res.status(err.status).json({
            errors: err.message
        }).end();
    } else if (err instanceof ValidationError) {
        return res.status(400).json({
            errors: err.details
        }).end();
    } else {
        return res.status(500).json({
            errors: err.message
        }).end();
    }
};

export default errorMiddleware;
