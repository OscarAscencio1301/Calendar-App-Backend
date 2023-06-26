import { Request, Response } from "express";

const createUser = async (req: Request, resp: Response) => {
    try {
        resp.status(200).json({
            ok: true,
            msg: 'ok'
        })
    } catch (error) {
        resp.status(500).json({
            ok: false,
            msg: 'Hable con el Administrador'
        })
    }
}

const getUsers = async (req: Request, resp: Response) => {
    try {
        resp.status(200).json({
            ok: true,
            msg: 'ok'
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
        resp.status(200).json({
            ok: true,
            msg: 'ok'
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
        resp.status(200).json({
            ok: true,
            msg: 'ok'
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
        resp.status(200).json({
            ok: true,
            msg: 'ok'
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