import mongoose from 'mongoose'

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE || '')
        console.log('OK DB')
    } catch (error) {
        console.log('ERROR DB')
        
    }
}