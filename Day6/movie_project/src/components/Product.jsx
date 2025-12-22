import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Product = () => {

    // fetch('https://dummyjson.com/posts')
    // .then(res => res.json())
    // .then(console.log);

    let [products, setProducts] = useState([]);

    async function fetchproduct() {
        let response = await fetch('https://dummyjson.com/products');
        let data = await response.json();
        console.log(data);
        setProducts(data.products);
    }

    useEffect(() => {
        fetchproduct();
    }, [])


    return (
        <>
            <h1>Products</h1>
            <div>
                {
                    products && products.map((p) => {
                        return (
                            <div key={p.id}>
                                <h5>{p.title} {p.price}</h5>
                                <Link to={`/productdetails/${p.id}`}>View More</Link>

                            </div>
                        )
                    })
                }
            </div>

        </>
    )
}

export default Product;