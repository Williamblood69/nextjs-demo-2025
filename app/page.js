"use client";

import React, { useEffect,useState } from "react";
import { Button } from "reactstrap";
import Header from "../components/Header";
import FormComponent from "@/components/FormComponent";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [filteredProduct, setFilteredProduct] = useState([]);
  const getAllProduct = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      if(!response.ok) throw new Error("Failed");
      const allProduct = await response.json(); 
      setProducts(allProduct.products);
      setFilteredProduct(allProduct.products);
    } catch (error) {
      setProducts([]);  
      setFilteredProduct([]);
    }
  };

  console.log('-products-',products);
  console.log('-filteredProduct-',filteredProduct);

  useEffect(() => {
    getAllProduct();
  },[]);

  const handleSearch = (text) => {
    const filterProduct = products.filter((p) => p.title.toLowerCase().includes(text.toLowerCase()));
    setFilteredProduct(filterProduct);
  }

  return (
    <div className="bg-neutral-900 pb-150">
      <Header />
      <FormComponent onSearch = {handleSearch} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 m-10">
        {filteredProduct.map((item) => (
          <div 
            key={item.id}
            className="bg-neutral-50 flex flex-col text-center border border-gray-300 rounded-3xl hover:shadow-lg hover:shadow-gray-400/60 cursor-pointer transition-all"              onClick={() => router.push(`/products/${item.id}`)}
          >
            <img 
              alt={item.title}
              src={item.thumbnail}
            />
            <p className="text-16px font-bold">{item.title}</p>
            <p className="text-16px">${item.price}</p>

            <div className="pb-4 flex justify-between px-17.5">
              <Button color="primary">Edit</Button>
              <Button color="danger">Delete</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
