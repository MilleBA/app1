"use client";
import VareComponent from "@/components/VareComponent";
import {useState} from "react";


export default function VarePage() {

    const [vare, setVare] = useState([]);

    return (
            <div
                className="p-4 h-full bg-center bg-cover vare-img">
                <VareComponent/>
            </div>
    )
}