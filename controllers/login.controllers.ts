import { Request, Response } from "express";

const login = async (req: Request, resp: Response) => {
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

const renew = async (req: Request, resp: Response) => {
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
    login,
    renew
}