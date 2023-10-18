import connectMongoDB from "@/utils/mongo";
import {NextResponse} from "next/server";
import People from "@/models/people";

export async function PUT(request, {params}) {
    const {id} = params;
    const {newName: name, newAge: age, newAddress: address} = await request.json();
    await connectMongoDB();
    await People.findByIdAndUpdate(id, {name, age, address});
    return NextResponse.json({message: "Person updated"}, {status: 200});
}

export async function GET(request, {params}) {
    const {id} = params;
    await connectMongoDB();
    const person = await People.findOne({_id: id});
    return NextResponse.json({person}, {status: 200});
}