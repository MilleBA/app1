'use client';
import {Trash2} from 'lucide-react';
import {useRouter} from "next/navigation";


export default function RemoveBtn({id}) {

    const router = useRouter();
    const removeItems = async () => {
        const confirmed = confirm('Are you sure?');
        if (confirmed) {
            const res = await fetch(`https://app1-milleba.vercel.app/api/items?id=${id}`, {
                method: 'DELETE',
            });
            if (res.ok) {
                router.refresh();
                router.push('/items');
            }


        }

    }
    return (
        <button onClick={removeItems} className='text-red-400'><Trash2 size={24}/></button>
    )
}