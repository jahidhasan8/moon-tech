import React, { Children, createContext, useEffect, useState } from 'react';

const PRODUCT_CONTEXT=createContext()

const ProductProvider = ({Children}) => {
    const [data,setData]=useState([])
  useEffect(()=>{
    fetch("../products.json")
    .then((res)=>res.json())
    .then((data)=>setData(data.data))
  },[])

  const value={
    data,
  }
    return (
        <PRODUCT_CONTEXT.Provider value={value}>
            {Children}
        </PRODUCT_CONTEXT.Provider>
    );
};

export default ProductProvider;