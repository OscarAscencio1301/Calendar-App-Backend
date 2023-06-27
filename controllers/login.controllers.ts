import { Request, Response } from "express";
import Users from "../models/Users";
import bcrypt from 'bcrypt'
import { createJWT } from "../jwt/createJWT";

const login = async (req: Request, resp: Response) => {

    try {

        const { email, password } = req.body

        const user = await Users.findOne({ email })

        if (!user) {
            return resp.status(400).json({
                ok: false,
                msg: 'User dont Exists'
            })
        }

        if (!user.status) {
            return resp.status(400).json({
                ok: false,
                msg: 'User deactivate'
            })
        }


       
        const passwords = bcrypt.compareSync(password, String(user.password))
        
        if (!passwords) {
            return resp.status(400).json({
                ok: false,
                msg: 'Error credentials'
            })
        }

        const token = await createJWT(user._id.toString())

        resp.status(200).json({
            ok: true,
            msg: 'ok',
            user,
            token

        })
    } catch (error) {
        resp.status(500).json({
            ok: false,
            msg: 'Hable con el Administrador'
        })
    }
}

const renew = async (req: Request, resp: Response) => {
    try {

        const user = req.user

        const token = await createJWT(user._id.toString())

        resp.status(200).json({
            ok: true,
            msg: 'ok',
            user,
            token
        })
    } catch (error) {
        resp.status(500).json({
            ok: false,
            msg: 'Hable con el Administrador'
        })
    }
}


export {
    login,
    renew
}