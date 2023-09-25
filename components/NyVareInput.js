"use client";
import {useState} from "react";

export default function NyVareInput({leggTilVare}) {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [amount, setAmount] = useState('');


    const submitHandler = (event) => {
        event.preventDefault();
        if (!name || !price || !amount) {
            return;
        } else {
            leggTilVare({name, price, amount});
            setName('');
            setPrice('');
            setAmount('');
        }
    };


    return (
        <>
            <div className="bg-teal-50 p-8 rounded-2xl shadow-md w-96">
                <h2 className="text-2xl mb-6 font-bold text-center">Legg til en ny vare:</h2>
                <form onSubmit={submitHandler}>
                    <div className="mb-4">
                        <label className="block mb-2" htmlFor="name">Vare navn</label>
                        <input
                            type="text"
                            id="name"
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-3 py-2 border rounded-md"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2" htmlFor="price">Pris</label>
                        <input
                            type="text"
                            id="price"
                            onChange={(e) => setPrice(e.target.value)}
                            className="w-full px-3 py-2 border rounded-md"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2" htmlFor="amount">Antall</label>
                        <input
                            type="number"
                            id="amount"
                            onChange={(e) => setAmount(e.target.value)}
                            className="w-full px-3 py-2 border rounded-md"
                            required
                        />
                    </div>
                    <div className="mb-4 flex flex-col items-center justify-center">
                        <button type="submit"
                                className="w-[full-2rem] bg-teal-500 text-white font-mono py-2 px-6 rounded hover:bg-teal-800 duration-500">Insert
                        </button>
                    </div>
                </form>
            </div>

        </>
    )
}