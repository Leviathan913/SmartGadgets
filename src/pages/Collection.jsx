import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

const Collection = () => {
  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts,setFilterproducts] = useState([]);
  const [category,setCategory] = useState([]);
  const [SubCategory,setSubCategory] = useState([]);

  const toggleCategory = (e) => {

    if (category.includes(e.target.value)){
      setCategory(prev => prev.filter(item => item !== e.target.value))
    }
    else{
      setCategory(prev => [...prev, e.target.value])
    }
  }

  const toggleSubCategory= (e) =>{
    if (SubCategory.includes(e.target.value)){
      setSubCategory(prev => prev.filter(item => item !== e.target.value))
      
    } else{
      setSubCategory(prev => [...prev, e.target.value])

    }
  }

  const applyFilter = () => {

    let productsCopy = products.slice();
    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }

    setFilterproducts(productsCopy);
  }


  useEffect(()=>{
    applyFilter();
  },[category,SubCategory])

  useEffect(()=>{
    setFilterproducts
  })

  {/*useEffect(()=>{
    console.log(SubCategory)
  },[SubCategory]) */}
  

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* Filter Options */}
      <div className="min-w-60">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          FILTERS
          <img
            className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
            src={assets.dropdown_icon}
            alt=""
          />
        </p>
        {/* Category Filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          {/* change categories to brand and don't forget to change the values*/}
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"Men"} onChange={toggleCategory}/>
              {/* Lenovo */}Men
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"Women"} onChange={toggleCategory}/>
              {/* Apple */}Women
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"Kids"} onChange={toggleCategory}/>
              {/* Samsung */}Kids
            </p>
          </div>
        </div>
        {/* SubCategory Filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 my-5 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          {/*  */}
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"Topwear"} onChange={toggleSubCategory}/>
              Topwear
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"Bottomwear"} onChange={toggleSubCategory}/>
              Bottomwear
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"Winterwear"} onChange={toggleSubCategory}/>
              Winterwear
            </p>
          </div>
        </div>
        {/* 
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">COLOR</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"Men"} />
              Black
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"Men"} />
              Silver
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"Men"} />
              White
            </p>
          </div>
        </div>
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          
          {/*<p className="mb-3 text-sm font-medium">RAM</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"Men"} />
              32 gigabytes
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"Men"} />
              18 gigabytes
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"Men"} />
              16 gigabytes
            </p>
          </div>
        </div> */}
      </div>

      {/* Right Side */}
      <div className="flex-1">

        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={"ALL"} text2={"COLLECTIONS"} />
          {/* Product Sort */}
          <select className="border-2 border-gray-300 text-sm px-2 cursor-pointer">
            <option value="relavent">Sort by: Relavent</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/*Map Products*/}
        <div className ='grid grid-cols-2 md:grid-cols-3 lg;grid-cols-4 gap-4 gap-y-6'>
          {
            filterProducts.map((item,index)=>(
              <ProductItem key ={index} name={item.name} id={item.id} price={item.price} image={item.image}></ProductItem>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Collection;