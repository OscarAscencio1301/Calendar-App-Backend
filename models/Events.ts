
import { model, Schema } from "mongoose"

const eventSchema = new Schema({
    start: {
        type: Date,
        required: [true, 'The start date is required']
    },
    end: {
        type: Date,
        required: [true, 'The end date is required']
    },
    title: {
        type: String,
        required: [true, 'The title is required']
    },
    desc: {
        type: String,
    },

    user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },

    status: {
        type: Boolean,
        default: true
    }
})

eventSchema.methods.toJSON = function () {
    const { _id, __v, ...rest } = this.toObject()
    rest.id = _id
    return rest

}


export default model('event', eventSchema)