export default function Hero({heading, message}) {
    return (
        <div className='flex items-center justify-center h-screen bg-center bg-cover custom-img'>
            <div className='p-5 text-white'>
                <h2 className='text-5xl font-bold'>{heading}</h2>
                <p className='py-5 text-xl'>{message}</p>
                <button className='px-8 py-2 border hover:bg-teal-300 hover:text-black hover:font-bold rounded'>More
                </button>
            </div>
        </div>
    )
}