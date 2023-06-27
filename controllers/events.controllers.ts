import { Request, Response } from "express";
import Events from "../models/Events";

const createEvent = async (req: Request, resp: Response) => {
    try {

        const { start, end, title, desc, status } = req.body

        const user = req.user

        const payload = {
            start,
            end,
            title,
            desc,
            user: user._id
        }


        const event = new Events(payload)

        await event.save()

        resp.status(200).json({
            ok: true,
            msg: 'ok',
            event
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

        const event = await Events.find({ status: true })

        resp.status(200).json({
            ok: true,
            msg: 'ok',
            event
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

        const { id } = req.params

        const event = await Events.findById(id)


        resp.status(200).json({
            ok: true,
            msg: 'ok',
            event
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

        const { start, end, title, desc, status } = req.body
        const { id } = req.params


        const event = await Events.findByIdAndUpdate(id, { start, end, title, desc }, { new: true })

        resp.status(200).json({
            ok: true,
            msg: 'ok',
            event
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

        const { id } = req.params


        const event = await Events.findByIdAndUpdate(id, { status: false }, { new: true })

        resp.status(200).json({
            ok: true,
            msg: 'ok',
            event
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