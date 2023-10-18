import mongoose, {Schema} from "mongoose";

const PeopleSchema = new Schema(
    {
        name: String,
        age: Number,
        address: String
    },
    {
        timestamps: true,
    }
);

const People = mongoose.models.People || mongoose.model("People", PeopleSchema);

export default People;