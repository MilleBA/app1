function Wrapper({children}) {
    return (
        <div
            className="min-h-screen flex flex-col justify-center items-center bg-gray-200 p-4 bg-center bg-cover projects-img">
            <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {children}
            </div>
        </div>
    );
}


export default Wrapper;



