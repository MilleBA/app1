'use client'
import {useState} from "react";

export default function MyButton() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <button type="button" onClick={handleClick}
                className='m-4 flex flex-col mx-auto bg-orange-300 hover:bg-orange-600 p-2 rounded shadow-lg'>Clicked {count} times</button>
    );
}
