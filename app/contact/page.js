import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
    return (
        <div className="flex items-center justify-center h-screen bg-center bg-cover contact-img">
            <div className="card w-96 mx-auto rounded-2xl bg-teal-50 shadow-xl hover:shadow">
                <Image className="w-32 mx-auto rounded-full -mt-20 border-8 border-white" src="/images/icon.png"
                       alt="" width={1000} height={1000}/>
                <h2 className="text-center mt-2 text-3xl font-medium">Mille Brekke Amundsen</h2>
                <div className="text-center bg-sky-200 mt-2 p-2 font-bold text-lg">

                    <Link href='https://milleba.com/'
                          className="text-center bg-sky-200 mt-2 font-bold text-lg">www.milleba.com</Link></div>
                <p className="text-center p-2 font-normal text-lg"> Fullstack Developer</p>
                <p className="px-6 text-center mt-2 font-light text-sm">
                    Love to take a long walk, swim.
                </p>

                <hr className="mt-8"/>
                <div className="flex p-4">
                    <div className="w-1/2 text-center">
                        <span className="font-bold">1.8 k</span> Followers
                    </div>
                    <div className="w-0 border border-gray-300">

                    </div>
                    <div className="w-1/2 text-center">
                        <span className="font-bold">2.0 k</span> Following
                    </div>
                </div>
            </div>
        </div>
    )
}