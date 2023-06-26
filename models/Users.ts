import { model, Schema } from "mongoose"

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'The name is required']
    },
    email: {
        type: String,
        required: [true, 'The email is required']
    },
    password: {
        type: String,
        required: [true, 'The password is required']
    },
    status: {
        type: Boolean,
        default: true
    }
})

userSchema.methods.toJSON = function () {
    const { _id, __v, password, ...rest } = this.toObject()
    rest.id = _id
    return rest

}

export default model('user', userSchema)
