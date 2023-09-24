import {connectToDatabase} from '@/app/utils/mongo';

export default async function handler(req, res) {
    const {db} = await connectToDatabase();

    const data = await db.collection('min_app').find({}).toArray();

    res.json({data});
}
