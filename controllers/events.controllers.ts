import { Request, Response } from "express";

const createEvent = async (req: Request, resp: Response) => {
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

const getEvents = async (req: Request, resp: Response) => {
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

const getEvent = async (req: Request, resp: Response) => {
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

const updateEvent = async (req: Request, resp: Response) => {
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

const deleteEvent = async (req: Request, resp: Response) => {
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
    createEvent,
    getEvent,
    getEvents,
    deleteEvent,
    updateEvent
}