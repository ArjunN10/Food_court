import cardBackgroundImage from "../../assets/images/bg.png";


export default function ItemCard({ items, title,image1,image2 ,top}) {
  return (
    <>
      <div className="relative p-20 bg-black">
        <div className="relative mt-16 mb-16 mx-10 border border-white  rounded-lg shadow-lg " style={{backgroundImage:`url(${cardBackgroundImage})`}}>
          <div className={`w-40 h-40  absolute  ${top?"top-[-40px]":"bottom-0"} right-[-40px]`}><img className="w-full h-full object-contain" src={image1} alt=""/></div>
          <div className="w-40 h-40  absolute  top-[-60px] left-[-60px]"><img className="w-full h-full object-cover" src={image2} alt=""/></div>
         <div className="w-full  h-fit flex justify-center items-center gap-5 p-1 relative">
          <div className="text-white w-32 h-1 bg-white "></div>

          <h2 className="text-[60px] font-bold text-center my-16 text-white"
          style={{ fontWeight: 'bold', fontSize: '653 bg-white', textShadow: '4px 3px #800020' }}>
            {title}
          </h2>
<div className="text-white w-32 h-1 bg-white "></div>
            </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {items.map((category) => (
                      <div key={category._id}>
                      <div className="flex justify-between items-center py-2 px-4 rounded-md">
              <p className="text-lg font-medium text-white">
                {category.name}
                {Array(Math.max(0, 100 - category.name.length)).fill(".").join("")}
              </p>
              <p className="text-lg font-medium text-white">
                ${category.price}
              </p>
            </div>

                <div className="flex justify-between items-center py-2 px-4 rounded-md">
                  <p className="text-lg font-medium text-[#7B7B7B]">
                    {category.menuItems.map((item, itemIndex) => (
                      <span key={item._id} style={{fontFamily:"Kelly Slab, sans-serif"}}>
                        {item.name}
                        {itemIndex !== category.menuItems.length - 1 && ", "}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
