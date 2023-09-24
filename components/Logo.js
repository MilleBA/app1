import Image from "next/image";
import Link from "next/link";

const Logo = () => {
    return (
        <div className='logo w-16 h-16'>
            <Link href='/'><Image src='/image/icon.png' alt='logo' width={1000} height={1000}/></Link>
        </div>
    )
}

export default Logo;