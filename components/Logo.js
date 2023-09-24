import Image from "next/image";

const Logo = () => {
    return (
        <div className='logo w-16 h-16'>
            <Image src='/image/icon.png' alt='logo' width={1000} height={1000}/>
        </div>
    )
}

export default Logo;