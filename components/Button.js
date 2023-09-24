export default function Button({children}) {
    return (
        <button className='bg-teal-500 text-white font-mono py-2 px-6 rounded hover:bg-teal-800 duration-500'>
            {children}
        </button>
    )
}