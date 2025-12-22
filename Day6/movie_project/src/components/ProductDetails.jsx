import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"


export default function ProductDetail(){

    const {id}=useParams();
    const [products,setProducts]=useState(null);

    
    async function fetchproduct() {
        let response = await fetch(`https://dummyjson.com/products/${id}`);
        let data = await response.json();
        setProducts(data);
    }

     useEffect(()=>{
        fetchproduct();
     },[id]);

     if(!products){
        return <div> Loading.....</div>
     }


    return(
        <>
        <h1>Product Details</h1>

        <img src={products.thumbnail} alt="" width={"200px"} height={"200px"} />

        <h2>Title: {products.title}</h2>
        <h2>Category : {products.category}</h2>
        <p>{products.description}</p>
        <h4>Available Stock qty: </h4>
        <h1>Price : {products.price}</h1>
        <button>Add to Cart</button>
        </>
        
    )
}