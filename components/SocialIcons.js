import {Facebook, Github, Linkedin} from "lucide-react";
import Link from "next/link";

export default function SocialIcons() {
    return (
        <div className='text-teal-500'>
            <span className='p-2 inline-flex items-center hover:text-gray-100  text-xl duration-300 mx-1.5'><Link
                href='https://www.facebook.com/Deimiliuks'><Facebook/></Link></span>
            <span className='p-2 inline-flex items-center rounded-full hover:text-gray-100 text-xl duration-300 mx-1.5'> <Link
                href='https://www.linkedin.com/in/mille-brekke-amundsen-72b6b023b/'><Linkedin/></Link></span>
            <span
                className='p-2 inline-flex items-center rounded-full hover:text-gray-100  text-xl duration-300 mx-1.5'><Link
                href='https://github.com/MilleBA'><Github/></Link></span>
        </div>
    )
}