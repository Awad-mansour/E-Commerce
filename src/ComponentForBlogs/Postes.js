import React, { useState } from 'react';
import './Postes.css';

const Postes = ({ posts, searchTerm }) => {
  const [expandedPosts, setExpandedPosts] = useState({});

  const toggleReadMore = (id) => {
    setExpandedPosts((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="blog-posts">
      {filteredPosts.length > 0 ? (
        filteredPosts.map((post) => (
          <div key={post.id} className="post">
            <img src={post.image} alt={post.title} className="post-image" />
            <div className="post-info">
              <div className="post-meta">
                <span><i className="fa-solid fa-user"></i> {post.presher}</span>
                <span><i className="fa-solid fa-calendar-days"></i> {post.date}</span>
                <span><i className="fa-solid fa-tags"></i> {post.category}</span>
              </div>
              <h3>{post.title}</h3>
              <p>
                {expandedPosts[post.id] ? post.content : `${post.content.slice(0, 60)}...`}
              </p>
              <button className="read-more" onClick={() => toggleReadMore(post.id)}>
                {expandedPosts[post.id] ? 'Show less' : 'Read more'}
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>No posts found.</p>
      )}
    </div>
  );
};

export default Postes;
