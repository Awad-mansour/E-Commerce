import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import { FaSearch } from "react-icons/fa";

const Sidebar = ({ posts = [], searchTerm, setSearchTerm }) => {
  const [filteredPosts, setFilteredPosts] = useState([]);

  const categories = ["Crafts", "Design", "Handmade", "Interior", "Wood"];

  useEffect(() => {
    const filtered = posts.filter(
      (post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPosts(filtered); 
  }, [searchTerm, posts]); 

  const getCategoryCount = (category) => {
    const count = filteredPosts.filter(
      (post) => post.category.toLowerCase() === category.toLowerCase()
    ).length;
    return count;
  };

  return (
    <div className="sidebar">
      <div className="search-box">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} 
        />
        <FaSearch />
      </div>

      <div className="categories">
        <h4>Categories</h4>
        <ul>
          {categories.map((category) => (
            <li key={category}>
              {category} <span>{getCategoryCount(category)}</span>{" "}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
