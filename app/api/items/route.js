import connectMongoDB from "@/utils/mongo";
import Items from "@/models/items";
import {NextResponse} from "next/server";

export async function POST(request) {
    const {name, price, amount} = await request.json();
    await connectMongoDB();
    await Items.create({name, price, amount});
    return NextResponse.json({message: "Items Created"}, {status: 201});
}

export async function GET() {
    await connectMongoDB();
    const items = await Items.find();
    return NextResponse.json({items});
}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Items.findByIdAndDelete(id);
    return NextResponse.json({message: "Items deleted"}, {status: 201});
}