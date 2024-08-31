import mongoose from "mongoose";

export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://lakshankavindu2725:Chooty%23102@cluster0.xe7vx.mongodb.net/foodweb').then(()=>console.log("DB connected"))
}