import './globals.css'
import {Inter} from 'next/font/google'
import {NavBar} from "@/components/NavBar";
import Footer from "@/components/Footer";

const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'Min Next App',
    description: 'Min Next.js app',
}

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <div>
            <NavBar/>
            {children}
            <Footer/>
        </div>
        </body>
        </html>
    )
}
