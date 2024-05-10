import cardBackgroundImage from "../../assets/images/Rectangle 107.png";

export default function ItemCard({ items, title }) {
  return (
    <>
      <div className="relative bg-black overflow-hidden">
        <div className="relative mt-16 mb-16 mx-10 border border-white bg-black rounded-lg shadow-lg overflow-hidden">
          <h2 className="text-3xl font-bold text-center my-16 text-white"
          style={{ fontWeight: 'bold', fontSize: '65px', textShadow: '4px 3px #800020' }}>
            {title}
          </h2>
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
