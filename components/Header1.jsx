import Image from "next/image"
import Block from "./Block"
import { SlHandbag } from "react-icons/sl";
import bag from '../public/bag.png'
import property from '../public/building.png'
import user from '../public/user.png'
import phone from '../public/phone.png'
import w from '../public/w.png'


const Header1 = () => {
  return (
    <div className="flex justify-between border-b-2 border-gray-300 items-center h-20 px-10">
      <Image src={'/logo.png'} alt="logo" 
      width={200} height={200} 
      className="w-28 h-28 "
      />
      <div className="flex border-r-2 border-gray-300 h-full">
        <Block title={'Become a member'} para={'Additional 10% off on stays.'} img={w}  />
        <Block title={'OYO for bussiness'} para={'Trusted by 5000 Corporates.'} img={bag}/>
        <Block title={'List your property'} para={'Start earning in 30 min.'} img={property}/>
        <Block title={'987654321'} para={'Call us to book now.'} img={phone}/>

        <div className="flex items-center px-3">
        <Image src={user} width={200} height={200} 
        className="w-6 h-6 rounded-full mr-5" />

        <h3 className="font-bold">Login / Singup</h3>
        </div>
      </div>
    </div>
  )
}

export default Header1