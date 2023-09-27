import connectMongoDB from "@/utils/mongo";
import {NextResponse} from "next/server";
import Items from "@/models/items";

export async function PUT(request, {params}) {
    const {id} = params;
    const {newName: name, newPrice: price, newAmount: amount} = await request.json();
    await connectMongoDB();
    await Items.findByIdAndUpdate(id, {name, price, amount});
    return NextResponse.json({message: "Items updated"}, {status: 200});
}

export async function GET(request, {params}) {
    const {id} = params;
    await connectMongoDB();
    const items = await Items.findOne({_id: id});
    return NextResponse.json({items}, {status: 200});
}