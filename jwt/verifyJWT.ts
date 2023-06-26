import { NextFunction, Request, Response } from "express";
import jsonwebtoken, { JwtPayload } from 'jsonwebtoken'
import Users from "../models/Users";

const verifyJWT = async (req: Request, resp: Response, next: NextFunction) => {

    const token = req.header('jwt')

    if (!token) return resp.status(404).json({
        ok: false,
        msg: 'Error found token'
    })

    try {

        const { id } = jsonwebtoken.verify(token, String(process.env.SECRET)) as any

        const user = await Users.findById(id)

        if (!user) {
            resp.status(400).json({
                ok: false,
                msg: "Incorrect User"
            })

        } else if (user.status) {
            return resp.json({
                msg: 'Delete User'
            })
        }

        req.user = user



    } catch (error) {
        resp.status(500).json({
            ok: false,
            msg: 'Error token'
        })

    }
}

export default verifyJWT