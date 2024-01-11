//@ts-ignore
import mongoose from 'mongoose'
const { Schema } = mongoose;

const checkupAppointmentSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    date: {
        
    }
})
