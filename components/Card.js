import MyButton from "@/components/MyButton";
import Image from "next/image";
import Button from "@/components/Button";
import Link from "next/link";

function Card({title, description, imageUrl, buttonText = "Default Button Text", ad}) {
    return (
        <div className="rounded shadow-2xl bg-gray-100">
            {imageUrl && (
                <div className="w-full h-1/2 md:h-48 overflow-hidden">
                    <Image className="w-full h-full object-cover" src={imageUrl} alt={title} width={1000}
                           height={1000}/>
                </div>
            )}
            <div className="px-6 py-4 flex flex-col items-center">
                <div className="font-bold p-2 text-xl mb-2">{title}</div>
                <p className="text-gray-700 p-2  text-base font-mono">{description}</p>
            </div>
            <div className="p-4 flex flex-col items-center">
                <Link href={ad}><Button>{buttonText}</Button></Link>
                <MyButton/>
            </div>
        </div>

    )
        ;
}


export default Card;
