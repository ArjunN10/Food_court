import React from 'react'
import { useEffect, useState } from "react";

import Navbar from '../../components/navbar/navbar'
import MenuTopSection from '../../components/Home/MenuTopsection'
import ItemCard from '../../components/Home/ItemCard'
import Footer from '../../components/footer/Footer';
import { Axios } from "../../api/api";

import jar from "../../assets/images/jar.png";
import cup from "../../assets/images/cup1.png";
import cocktail from "../../assets/images/cocktail.png";
import cocktail2 from "../../assets/images/cocktail2.png";
import FlavorCard from '../../components/Home/FlavorCard';
import DataCard from '../../components/Home/DataCard';
import CostomButton from '../../components/Buttun';

const value=["ORANGE MINT","BLUE MIST","MIGHTY FREEZE","LUV 66","PEACH","WATERMELON"]
export default function Home() {
  const [branchItems, setBrunchItems] = useState([]);
  const [drinksItems, setDrinksItems] = useState([]);
  const [flavors,setFlavors]=useState(value)

  useEffect(() => {
    const getitemdata = async () => {
      try {
        const response = await Axios.get("api/category/item");
        if (response.data.status === "success") {
          const brunchItems = response.data.data.filter(item => item.category === "brunch cocktails");
          const drinksItems = response.data.data.filter(item => item.category === "drinks");
  
          setBrunchItems(brunchItems)
          setDrinksItems(drinksItems)
        }
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    };
  
    getitemdata();
  }, []);
  
  

  return (
    <div className="w-screen  h-screen">
        <Navbar/>
        <MenuTopSection/>
        <div className='w-full  h-fit pt-10 bg-black flex  flex-col gap-8'>

        <ItemCard items={drinksItems} title="DRINKS" image1={jar} image2={cup} top={true}/>
        <ItemCard items={branchItems} title="BRANCH COCKTAILS" image1={cocktail2} image2={cocktail} top={false}/>
        <FlavorCard item={flavors}/>
        <DataCard/>
        <Footer/>
        </div>
    </div>
  )
}
