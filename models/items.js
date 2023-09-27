import mongoose, {Schema} from "mongoose";

const itemsSchema = new Schema(
    {
        name: String,
        price: Number,
        amount: Number
    },
    {
        timestamps: true,
    }
);

const Items = mongoose.models.Items || mongoose.model("Items", itemsSchema);

export default Items;