import { Routes, Route } from "react-router-dom";
import { Navbar } from "../navbarProd/navbar";
import { Product } from "../product/Product";
import { ProductDetails } from "../product/ProductDetails";

export const AllRouters =()=>{
    return(<>
    <Routes>
        <Route path="/product" element={<Product/>}/>
        <Route path="/product/:id" element={<ProductDetails/>}/>
    </Routes>
    </>)
}