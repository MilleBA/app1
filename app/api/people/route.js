import connectMongoDB from "@/utils/mongo";
import People from "@/models/people";
import {NextResponse} from "next/server";

export async function POST(request) {
    const {name, age, address} = await request.json();
    await connectMongoDB();
    await People.create({name, age, address});
    return NextResponse.json({message: "Person Created"}, {status: 201});
}

export async function GET() {
    await connectMongoDB();
    const person = await People.find();
    return NextResponse.json({person});
}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await People.findByIdAndDelete(id);
    return NextResponse.json({message: "Person deleted"}, {status: 201});
}