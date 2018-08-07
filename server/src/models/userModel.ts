import mongoose = require('mongoose');
import { Schema } from "mongoose";


export interface IUserSchema extends mongoose.Document {
  email: string;
  password: string;
  firstName: string;
  created_at?: string;  
}

export const userSchema : Schema = new Schema({

email: {type: String, required: true},
password : {type: String, required: true},
firstName: {type: String, required: true},
createdAt: {type: Date, default: Date.now}
});


export const User = mongoose.model<IUserSchema>('User', userSchema);
export default User;

