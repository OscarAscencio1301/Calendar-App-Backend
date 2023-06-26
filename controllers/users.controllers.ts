import { Request, Response } from "express";
import bcrypt from 'bcrypt'
import Users from "../models/Users";
import { createJWT } from "../jwt/createJWT";

const createUser = async (req: Request, resp: Response) => {
    try {

        const { name, email, password, ...rest } = req.body

        const userExists = await Users.findOne({ email })

        if (userExists) {
            return resp.status(400).json({
                ok: false,
                msg: 'User Exists'
            })
        }

        const user = new Users({ name, email, password })

        const salt = bcrypt.genSaltSync()

        user.password = bcrypt.hashSync(password, salt)

        await user.save()

        const token = await createJWT(user._id.toString())

        resp.status(200).json({
            ok: true,
            msg: 'ok',
            user,
            token

        })
    } catch (error) {
        console.log(error)
        resp.status(500).json({
            ok: false,
            msg: 'Hable con el Administrador'
        })
    }
}

const getUsers = async (req: Request, resp: Response) => {
    try {

        const user = await Users.find({ status: true })

        resp.status(200).json({
            ok: true,
            msg: 'ok',
            user
        })
    } catch (error) {
        resp.status(500).json({
            ok: false,
            msg: 'Hable con el Administrador'
        })
    }
}

const getUser = async (req: Request, resp: Response) => {
    try {

        const { id } = req.params

        const user = await Users.findById(id)

        resp.status(200).json({
            ok: true,
            msg: 'ok',
            user
        })
    } catch (error) {
        resp.status(500).json({
            ok: false,
            msg: 'Hable con el Administrador'
        })
    }
}

const updateUser = async (req: Request, resp: Response) => {
    try {

        const { email, password, status, ...rest } = req.body

        const { id } = req.params

        if (password) {
            const salt = bcrypt.genSaltSync()
            rest.password = bcrypt.hashSync(password, salt)
        }

        const user = await Users.findByIdAndUpdate(id, rest, { new: true })

        resp.status(200).json({
            ok: true,
            msg: 'ok',
            user
        })


    } catch (error) {
        resp.status(500).json({
            ok: false,
            msg: 'Hable con el Administrador'
        })
    }
}

const deleteUser = async (req: Request, resp: Response) => {
    try {

        const { id } = req.params

        const user = await Users.findByIdAndUpdate(id, { status: false }, { new: true })

        resp.status(200).json({
            ok: true,
            msg: 'ok',
            user
        })
    } catch (error) {
        resp.status(500).json({
            ok: false,
            msg: 'Hable con el Administrador'
        })
    }
}


export {
    createUser,
    getUser,
    getUsers,
    deleteUser,
    updateUser
}