import logoicon from "../../assets/images/Logo.png"
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function DataCard() {
    return (
      <div className="w-fit md:w-full h-fit  mx-10 md:mx-0  flex flex-row flex-wrap justify-center items-center md:gap-3 gap-10 ">

        <div className="w-full md:w-[20%]  h-32 hover:scale-105 transition-all duration-500  border border-stone-400 rounded-xl flex flex-col  gap-2  items-center">\
        <h1 className="text-blue-400">CONNECT WITH US </h1>
        <h1 className="text-stone-400 text-[10px] font-thin"> +1 80536725 </h1> 
        <h1 className="text-stone-400 text-[10px] font-thin"> email@42brandgrill.com </h1> 
        </div>
        <div className="w-full md:w-[20%] h-32 hover:scale-105 transition-all duration-500   gap-3  relative  border border-stone-400 rounded-xl justify-center flex flex-col items-center">
        <img
                src={logoicon}
                alt="Navbar Icon"
                className=" absolute top-[-30px]  h-14 w-1h-14" />
                 <div className='flex text-xl  justify-between gap-1'>
                  <h1 className='text-blue-400'>DEEP <span className='text-white'>NET</span></h1>
                  <h1 className='text-stone-100 text-opacity-40' >  SOFT</h1>
                </div>
                <div className="flex gap-3 text-[10px] text-stone-400" > 
                <FaFacebookF/>
                <FaTwitter/>
                <FaYoutube/>
                <FaInstagram/>
                 </div>
        </div>
        <div className="w-full md:w-[20%] h-32 hover:scale-105 transition-all duration-500   border border-stone-400 rounded-xl flex flex-col  gap-2  items-center">\
        <h1 className="text-blue-400">FIND US </h1>
        <h1 className="text-stone-400 text-[10px] font-thin"> 327 MEMORIAL , DR ST ,Atlanta </h1> 
        <h1 className="text-stone-400 text-[10px] font-thin"> GA30312, USA </h1> 

        </div>      </div>
    );
  }
  