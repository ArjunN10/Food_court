import flavor from "../../assets/images/flavor.png"
import cardBackgroundImage from "../../assets/images/bg.png";
import CostomButton from "../Buttun";

export default function FlavorCard({item}) {
  return (
        
      <div className="relative md:px-20  md:py-10 py-2  px-4  bg-black">
        <div className="relative   border flex flex-col justify-center items-center  py-10 border-white  rounded-lg shadow-lg " style={{backgroundImage:`url(${cardBackgroundImage})`}}>
            <img src={flavor} alt="" />
           <div className="flex justify-center md:gap-5 gap-2  text-white">
            {item.map((value,index)=>(
                <h5 key={index}className=" md:text-2xl text-[10px]">{value}</h5>
            ))}
           </div>
        </div>
        <div className="w-full  flex justify-center p-10">

        <CostomButton content={"ORDER ONLINE"}/>
        </div>
        </div>
  )
}
