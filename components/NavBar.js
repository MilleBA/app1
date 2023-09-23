'use client'

import {usePathname} from 'next/navigation';
import Link from 'next/link';

export function NavBar() {
    const pathname = usePathname()

    // styles for all links
    const linkStyle = 'flex items-center p-4 font-extrabold font-mono tracking-wide hover:bg-red-300 hover:text-black duration-300 mx-4';

    // styles for active and non-active links
    const activeStyle = linkStyle + ' text-white bg-gray-500 ';
    const nonActiveStyle = linkStyle + ' text-black font-bold';

    return (
        <nav className='flex justify-center items-center bg-red-100 drop-shadow-lg'>
            <ul className='flex justify-around p-2'>
                <li>
                    <Link href="/" className={pathname === '/' ? activeStyle : nonActiveStyle}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/contact" className={pathname === '/contact' ? activeStyle : nonActiveStyle}>
                        Contact
                    </Link>
                </li>
                <li>
                    <Link href='/auth' className={pathname === '/auth' ? activeStyle : nonActiveStyle}>Login</Link>
                </li>
                <li>
                    <Link href='/profile' className={pathname === '/profile' ? activeStyle : nonActiveStyle}>Profile</Link>
                </li>
                <li>
                    <button className='flex items-center p-4 font-extrabold font-mono tracking-wide rounded-xl hover:bg-red-600 hover:text-black duration-300 mx-4'>Logout</button>
                </li>
            </ul>
        </nav>
    )
}
