import Events from "../models/Events";
import Users from "../models/Users"

export const validateIdUser = async (id = '') => {

    const validar = await Users.findById(id)

    if (!validar) {
        throw new Error ('The id is incorrect')
    }

}

export const validateIdEvent = async (id = '') => {

    const validar = await Events.findById(id)

    if (!validar) {
        throw new Error ('The id is incorrect')
    }

}

