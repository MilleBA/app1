import Button from "@/components/Button";
import SocialIcons from "@/components/SocialIcons";

export default function Footer() {
    return (
        <footer className='bg-gray-950 text-white'>
            <div className='md:flex md:justify-between md:items-center sm:px-12 px-4 py-7'>
                <h1 className='lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5'>
                    <span className='text-teal-400'>Stay updated</span> with the latest IT trends and tutorials.
                </h1>
                <div>
                    <input
                        type="email"
                        placeholder='      Enter Your Email'
                        autoComplete={true}
                        className='text-gray-800 sm:w-72 w-full sm:mr-5 m1 lg:mb-0 mb-4 py-2.5 rounded focus:outline-none '/>
                    <Button>Subscribe</Button>
                </div>
            </div>
            <div className='flex justify-around items-center space-x-4 pt-2 text-gray-400 text-sm pb-8'>
                <span>© 2023 Mille Brekke Amundsen</span>
                <SocialIcons/>
            </div>
        </footer>
    )
}