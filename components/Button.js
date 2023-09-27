export default function Button({children}) {
    return (
        <button type='submit' className='bg-teal-500 flex w-fit text-white font-mono py-2 px-6 rounded hover:bg-teal-800 duration-500'>
            {children}
        </button>
    )
}