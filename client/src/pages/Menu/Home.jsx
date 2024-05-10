import React from 'react'
import Navbar from '../../components/navbar/navbar'
import MenuTopSection from '../../components/Home/MenuTopsection'
import ItemCard from '../../components/Home/ItemCard'

import { Axios } from "../../api/api";
import { useEffect, useState } from "react";
import Footer from '../../components/footer/Footer';

export default function Home() {

  const [branchItems, setBrunchItems] = useState([]);
  const [drinksItems, setDrinksItems] = useState([]);

  useEffect(() => {
    const getitemdata = async () => {
      try {
        const response = await Axios.get("api/category/item");
        if (response.data.status === "success") {
          const brunchItems = response.data.data.filter(item => item.category === "brunch cocktails");
          const drinksItems = response.data.data.filter(item => item.category === "drinks");
  
          setBrunchItems(brunchItems);
          setDrinksItems(drinksItems);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    getitemdata();
  }, []);
  
  

  return (
    <div className="w-screen  h-screen">
        <Navbar/>
        <MenuTopSection/>
        <ItemCard items={drinksItems} title="DRINKS"/>
        <ItemCard items={branchItems} title="BRANCH COCKTAILS"/>
        <Footer/>
    </div>
  )
}
