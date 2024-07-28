import { connectDB } from "@/lib/config/db";
import EmailModel from "@/lib/models/EmailModel";
import { NextResponse } from "next/server";

const loadDB = async () => {
    await connectDB();
}
loadDB();

export async function POST(request){
    const formData = await request.formData();
    const emailData = {
        email:`${formData.get("email")}`,
    }
    await EmailModel.create(emailData);
    return NextResponse.json({success:true,msg:"Email Subscribed Successfully"})
}

export async function GET(request){
    const emails = await EmailModel.find({});
    return NextResponse.json({email:emails});
}

export async function DELETE(request){
    const id = await request.nextUrl.searchParams.get('id');
    const email = await EmailModel.findByIdAndDelete(id);
    return NextResponse.json({success:true, msg:"Email Deleted"})
}