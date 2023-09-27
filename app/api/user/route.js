import connectMongoDB from "@/utils/mongo";
import Users from "@/models/users";
import {NextResponse} from "next/server";

export async function POST(request) {
    const {email, password} = await request.json();
    await connectMongoDB();
    await Users.create({email, password});
    return NextResponse.json({message: "User Created"}, {status: 201});
}

export async function GET() {
    await connectMongoDB();
    const users = await Users.find();
    return NextResponse.json({users});
}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Users.findByIdAndDelete(id);
    return NextResponse.json({message: "User deleted"}, {status: 201});
}