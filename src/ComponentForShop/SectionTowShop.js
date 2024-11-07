import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./SectionTowShop.css";

const SectionTowShop = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("default");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        setProducts(response.data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  const filteredProducts = products
    .filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === "name") {
        return a.title.localeCompare(b.title);
      } else if (sortBy === "price") {
        return a.price - b.price;
      } else if (sortBy === "priceHigh") {
        return b.price - a.price;
      }
      return 0;
    });

  return (
    <>
      <div className="task-par">
        <span>
          <i className="fa-solid fa-sliders"></i>
          Filter
        </span>
        <span>
          <input
            type="text"
            placeholder="Search by name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </span>
        <span>
          Show <strong>{filteredProducts.length}</strong> items
        </span>
        <span>
          Sort By:
          <select onChange={(e) => setSortBy(e.target.value)}>
            <option value="default">Select...</option>
            <option value="name">Name</option>
            <option value="price">Lowest Price</option>
            <option value="priceHigh">Highest Price</option>
          </select>
        </span>
      </div>

      <br />
      <div className="products-container container">
        <h1>Our Products</h1>
        <div className="products-grid">
          {filteredProducts.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="product-card"
            >
              <img src={product.thumbnail} alt={product.title} />
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <span>Price: ${product.price}</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionTowShop;
