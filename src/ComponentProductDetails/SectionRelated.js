import React, { useEffect, useState } from "react";
import axios from "axios";
import "./SectionRelated.css";

const SectionRelated = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        setProducts(response.data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      {loading ? (
        <div className="loading-indicator">
          <div className="spinner"></div>
          <p>Loading products...</p>
        </div>
      ) : (
        <div className="container">
          <div className="sec-three-home">
            <h1>Related Products</h1>
          </div>
          <div className="content-sec-three-home">
            {products.slice(0, 4).map((product) => (
              <div key={product.id}>
                <img src={product.thumbnail} alt={product.title} />
                <p>{product.title}</p>
                <span>Rs. {product.price}</span>
              </div>
            ))}
          </div>
          <h3>View More</h3>
        </div>
      )}
    </>
  );
};

export default SectionRelated;
