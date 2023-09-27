'use client';

import {useState} from "react";
import {useRouter} from "next/navigation";
import Button from "@/components/Button";


export default function EditItemsForm({id, name, price, amount}) {
    const [newName, setNewName] = useState(name);
    const [newPrice, setNewPrice] = useState(price);
    const [newAmount, setNewAmount] = useState(amount);

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/items/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({newName, newPrice, newAmount}),
            });

            if (!res.ok) {
                throw new Error('Failed to update items');
            }

            router.refresh();
            router.push('/items');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="flex items-center justify-center h-screen bg-center bg-cover edit_item-img">
            <div className="bg-teal-50 p-8 rounded-2xl shadow-md w-96">
                <form
                    onSubmit={handleSubmit}
                    className='flex flex-col gap-3'>
                    <input
                        onChange={(e) => setNewName(e.target.value)}
                        value={newName}
                        className='border border-slate-500 px-8 py-2' type="text" placeholder='Item'/>
                    <input
                        onChange={(e) => setNewPrice(e.target.value)}
                        value={newPrice}
                        className='border border-slate-500 px-8 py-2' type="number" placeholder='Price'/>
                    <input
                        onChange={(e) => setNewAmount(e.target.value)}
                        value={newAmount}
                        className='border border-slate-500 px-8 py-2' type="number" placeholder='Amount'/>
                    <div className='flex flex-col items-center justify-center'>
                        <Button>Update Items</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}