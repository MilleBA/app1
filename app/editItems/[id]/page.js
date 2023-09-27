import EditItemsForm from "@/components/EditItemsForm";

const API_URL = process.env.NEXT_PUBLIC_API_URL || process.env.LOCAL_URL;

const getItemsById = async (id) => {
    try {
        const res = await fetch(`${API_URL}/api/items/${id}`, {
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error('Failed to fetch items');
        }
        return res.json();
    } catch (error) {
        console.log(error);
    }
}

export default async function EditItems({params}) {
    const {id} = params;
    const {items} = await getItemsById(id);
    const {name, price, amount} = items;
    return <EditItemsForm id={id} name={name} price={price} amount={amount}/>
}