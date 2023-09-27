'use client';
import {useState} from "react";
import {useRouter} from "next/navigation";

const API_URL = process.env.NEXT_PUBLIC_API_URL || process.env.LOCAL_URL;

export default function addItem() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [name, setName] = useState('');
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [price, setPrice] = useState('');
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [amount, setAmount] = useState('');

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !price || !amount) {
            alert('Name, items and amount are required.');
            return;
        }

        try {
            const res = await fetch(`${API_URL}/api/items`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({name, price, amount}),
            });

            if (res.ok) {
                router.refresh();
                router.push('/items');
            } else {
                throw new Error('Failed to create the items');
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="flex items-center justify-center h-screen bg-center bg-cover add_item-img">
            <div className="bg-teal-50 p-8 rounded-2xl shadow-md w-96">
                <h2 className="text-2xl mb-6 font-bold text-center">Add a new item:</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block mb-2" htmlFor="name">Item name</label>
                        <input
                            type="text"
                            id="name"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            className="w-full px-3 py-2 border rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2" htmlFor="price">Price</label>
                        <input
                            type="text"
                            id="price"
                            onChange={(e) => setPrice(e.target.value)}
                            value={price}
                            className="w-full px-3 py-2 border rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2" htmlFor="amount">Amount</label>
                        <input
                            type="number"
                            id="amount"
                            onChange={(e) => setAmount(e.target.value)}
                            value={amount}
                            className="w-full px-3 py-2 border rounded-md"
                        />
                    </div>
                    <div className="mb-4 flex flex-col items-center justify-center">
                        <button type="submit"
                                className="w-[full-2rem] bg-teal-500 text-white font-mono py-2 px-6 rounded hover:bg-teal-800 duration-500">Insert
                            item
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}