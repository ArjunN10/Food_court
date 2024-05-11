import CostomButton from "../Buttun";
import bgImage from "../../assets/images/Rectangle 103.png";
import menuImage from "../../assets/images/Rectangle 107.png";

export default function MenuTopSection() {
  return (
    <div className="relative">
      <div className="relative w-full h-[300px] overflow-hidden">
        <img
          src={bgImage}
          alt="Background"
          className="w-full h-full object-cover object-center md:object-left"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center h-full">
          <div className="text-center mb-2 ">
            <h2 className="text-white font-bold md:text-5xl lg:text-6xl" style={{ textShadow: '4px 3px #800020' }}>
              MENU
            </h2>
          </div>
          <div className="text-center px-4 md:w-3/4 lg:w-2/3">
            <p className="text-gray-400 md:inline md:block" style={{ fontFamily: "Kelly Slab, sans-serif" }}>
              Please take a look at our menu featuring food, drinks, and brunch. If you'd like to
              <br className="2xl:hidden" />
               place an order, use the "Order Online" button located below the menu.
            </p>
          </div>
        </div>
      </div>
      <div className="relative h-[60px] flex justify-center items-center">
<div className="absolute w-full h-fit  flex justify-center items-center text-white gap-3">
  <CostomButton content={"FOOD"}/>
  <CostomButton content={"DRINKS"}/>
  <CostomButton content={"BRUNCH"}/>
</div>
      <img
        src={menuImage}
        alt="Menu"
        className="w-full h-full  object-cover "
        / >
       </div>
   </div>
  );
}
