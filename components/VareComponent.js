"use client";
import {useState} from "react";
import NyVareInput from "@/components/NyVareInput";

export default function VareComponent(props) {
    const varerArray = [
        {name: "Hakke", price: 123.00, amount: 20},
        {name: "Spade", price: 50.00, amount: 50},
        {name: "Vindu", price: 100.00, amount: 100},
    ]

    const [varer, setVarer] = useState(varerArray);


    const [num, setNum] = useState(1);

    const increaseNum = () => {
        setNum(prevNum => prevNum + 1);
    };

    const leggTilVare = (nyVare) => {
        setVarer(prevVare => [...prevVare, nyVare]);
    };

    return (
        <>
            <NyVareInput leggTilVare={leggTilVare}/>
            <div className="m-4 flex flex-col border-2 border-teal-700 bg-teal-50 rounded-2xl">

                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full text-left text-sm font-light">
                                <thead className="border-b font-medium dark:border-neutral-500 bg-teal-300">
                                <tr>
                                    <th scope="col" className="px-6 py-4">#</th>
                                    <th scope="col" className="px-6 py-4">Vare</th>
                                    <th scope="col" className="px-6 py-4">Pris</th>
                                    <th scope="col" className="px-6 py-4">Antall</th>
                                </tr>
                                </thead>
                                <tbody>

                                {
                                    varer.map((v, index) => (
                                        <tr key={index} className="border-b dark:border-neutral-500 odd:bg-teal-100 ">
                                            <td className="whitespace-nowrap px-6 py-4 font-medium">{num + index}</td>
                                            <td className="whitespace-nowrap px-6 py-4">{v.name}</td>
                                            <td className="whitespace-nowrap px-6 py-4">{v.price}</td>
                                            <td className="whitespace-nowrap px-6 py-4">{v.amount}</td>
                                        </tr>
                                    ))}


                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

