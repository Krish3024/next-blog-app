import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://krishsahu:khushikrish3024@cluster0.2uqyc3r.mongodb.net/blog-app')
    console.log('db connected');
}