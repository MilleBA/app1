import MyButton from "@/components/MyButton";
import Image from "next/image";

function Card({title, description, imageUrl, buttonText = "Default Button Text"}) {
    return (
        <div className="rounded shadow-2xl bg-gray-100">
            {imageUrl && (
                <div className="w-full h-48 overflow-hidden">
                    <Image className="w-full h-full object-cover" src={imageUrl} alt={title} width={1000} height={1000}/>
                </div>
            )}
            <div className="px-6 py-4">
                <div className="font-bold p-2 text-xl mb-2">{title}</div>
                <p className="text-gray-700 p-2  text-base font-mono">{description}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <button
                    className='m-4 flex flex-col mx-auto bg-gray-500 hover:bg-gray-800 text-white p-2 rounded shadow-lg'>{buttonText}</button>
                <MyButton/>
            </div>
        </div>
    );
}


export default Card;
