'use client'

import Image from "next/image"


const Header4 = () => {
  return (
    <div className="flex justify-between items-center my-14 border-2 rounded-lg border-gray-300 px-5">
        <div className="flex items-center">
            <Image src={'/fire.jpg'} alt="fire" width={200} height={200}
            className="w-28 h-28 rounded-full mr-5" />
            <div className="text-xl">
                <p className="font-bold">Get access to exclusive deals</p>
                <p>Only the best deals reach you inbox</p>
            </div>
        </div>

        <div className="flex">
            <input type="email" className="px-6 py-3 mr-5 w-80 h-12 outline-none border  border-gray-300 rounded-lg" placeholder="e.g. john@gmail.com"/>
            <button type="submit" className="w-36 h-12 bg-red-500 text-white rounded-lg text-md cursor-pointer">Notify me</button>
        </div>
        
    </div>
  )
}

export default Header4