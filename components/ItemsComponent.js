'use client';
import RemoveBtn from "@/components/RemoveBtn";
import Link from "next/link";
import {PenSquare} from 'lucide-react';
import React, {useEffect, useState} from 'react';

export default function ItemsComponent() {
    const [items, setItems] = useState([]); // Initialize state to an empty array
    const num = 1;

    useEffect(() => {
        const getItems = async () => {
            try {
                const res = await fetch('http://localhost:3000/api/items', {cache: "no-store"});
                if (!res.ok) throw new Error("Failed to fetch items");
                const data = await res.json();
                setItems(data.items || []); // Set the items state to the fetched items, or an empty array if it's undefined
            } catch (error) {
                console.error("Error loading topics:", error);
            }
        };
        getItems();
    }, []);

    return (
        <div className='p-4 border border-slate-300 my-3 flex items-center justify-center'>
            <div className=" bg-teal-50 overflow-x-scroll rounded">
                <table className="text-left text-sm font-light ">
                    <thead className="border-b font-medium dark:border-neutral-500 bg-teal-300">
                    <tr>
                        <th scope="col" className="px-6 py-4">#</th>
                        <th scope="col" className="px-6 py-4">Item</th>
                        <th scope="col" className="px-6 py-4">Price</th>
                        <th scope="col" className="px-6 py-4">Amount</th>
                        <th scope="col" className="px-6 py-4"></th>
                    </tr>
                    </thead>
                    <tbody>
                    {items.map((i, index) => (
                        <tr key={index} className="border-b dark:border-neutral-500 odd:bg-teal-100 ">
                            <td className="whitespace-nowrap px-6 py-4 font-medium">{num + index}</td>
                            <td className="whitespace-nowrap px-6 py-4">{i.name}</td>
                            <td className="whitespace-nowrap px-6 py-4">{i.price}</td>
                            <td className="whitespace-nowrap px-6 py-4">{i.amount}</td>
                            <td className='flex gap-2 p-3'>
                                <RemoveBtn id={i._id}/>
                                <Link href={`/editItems/${i._id}`} className=''><PenSquare size={24}/></Link>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

