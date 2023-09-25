import './globals.css'
import {Inter} from 'next/font/google'
import Footer from "@/components/Footer";
import {NavBar} from "@/components/NavBar";
import Wrapper from "@/components/Wrapper";

const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'Min Next App',
    description: 'Min Next.js app',
}

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <div className=''>
            <NavBar/>
                {children}
            <Footer/>
        </div>
        </body>
        </html>
    )
}
