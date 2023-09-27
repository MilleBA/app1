import ItemsComponent from "@/components/ItemsComponent";
import Link from "next/link";

export default function ItemsPage() {


    return (
        <div className="p-10 h-full bg-center bg-cover item-img">
            <nav className='flex justify-between items-center bg-slate-800 px-8 py-3'>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <Link href={'/items'} className='text-white font-bold'>Mille's 🛒</Link>
                <Link href={'/addItem'} className='bg-teal-100 p-2'>Add Items</Link>
            </nav>
            <ItemsComponent/>
        </div>
    )
}