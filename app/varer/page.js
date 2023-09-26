"use client";
import VareComponent from "@/components/VareComponent";
import {useState} from "react";


export default function VarePage() {

    const [vare, setVare] = useState([]);

    return (
        <>
            <div
                className="p-4 flex  flex-row md:flex-col  items-center justify-center h-screen bg-center bg-cover vare-img">
                <VareComponent/>
            </div>
        </>

    )
}