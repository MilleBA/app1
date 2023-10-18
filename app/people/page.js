'use client';
import React, {useEffect, useState} from 'react';

export default function People() {
    const [people, setPeople] = useState([]); // Initialize state to an empty array
    const num = 1;

    useEffect(() => {
        const getPeople = async () => {
            try {
                const res = await fetch('https://app1-milleba.vercel.app/api/people', {cache: "no-store"});
                if (!res.ok) throw new Error("Failed to fetch people");
                const data = await res.json();
                setPeople(data.person || []); // Set the items state to the fetched items, or an empty array if it's undefined
            } catch (error) {
                console.error("Error loading topics:", error);
            }
        };
        getPeople();
    }, []);

    return (
        <div className='p-4 border border-slate-300 my-3 flex items-center justify-center'>
            <div className=" bg-teal-50 overflow-x-scroll rounded">
                <table className="text-left text-sm font-light ">
                    <thead className="border-b font-medium dark:border-neutral-500 bg-teal-300">
                    <tr>
                        <th scope="col" className="px-6 py-4">#</th>
                        <th scope="col" className="px-6 py-4">Name</th>
                        <th scope="col" className="px-6 py-4">Age</th>
                        <th scope="col" className="px-6 py-4">Address</th>
                        <th scope="col" className="px-6 py-4"></th>
                    </tr>
                    </thead>
                    <tbody>
                    {people.map((i, index) => (
                        <tr key={index} className="border-b dark:border-neutral-500 odd:bg-teal-100 ">
                            <td className="whitespace-nowrap px-6 py-4 font-medium">{num + index}</td>
                            <td className="whitespace-nowrap px-6 py-4">{i.name}</td>
                            <td className="whitespace-nowrap px-6 py-4">{i.age}</td>
                            <td className="whitespace-nowrap px-6 py-4">{i.address}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}