

const Footer = () => {
    return (
        <div className="h-96 bg-gray-400 text-white">
            {/* All rights are reserved. &copy; 2024. */}
            <div className="px-16 flex justify-between items-center h-20 border-b">
                <div className="flex items-center gap-10">
                    <h1 className="font-bold text-5xl">OYO</h1>
                    <h2 className="text-xl font-bold">World's leading chain of hotels and homes</h2>
                </div>

                <div className="flex items-center gap-10">
                    <h2 className="text-xl font-bold">Join our network and grow your business!</h2>
                    <button className="bg-white h-10 rounded-md font-bold text-gray-400 px-3">List your property</button>
                </div>
            </div>
            <div className=" px-16 py-10 flex justify-between items-center h-60 border-b">
                <div className="border-r w-1/3 h-full p-5">
                    <p>Dowload OYO app for exciting offer.</p>
                </div>
                <div className="border-r w-1/3 h-full p-5">div2</div>
                <div className="w-1/3 h-full p-5">div3</div>
            </div>
        </div>
    )
}

export default Footer