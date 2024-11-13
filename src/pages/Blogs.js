import React, { useState } from 'react';
import './Blogs.css';
import Postes from '../ComponentForBlogs/Postes';
import Navbar from '../Components/Navbar';
import Sidebar from '../ComponentForBlogs/Sidebar';
import SctionOneShop from "../ComponentForShop/SctionOneShop";
import SectionThreeShop from '../ComponentForShop/SectionThreeShop';
import Footer from '../Components/Footer';

const Blogs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

const posts = [
  {
    id: 1,
    title: 'Going all-in with millennial design',
    presher: 'admin',
    date: '14 Oct 2022',
    category: 'Wood',
    image: require('../images/Rectangle 68.png'),
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id nulla tempus, aliquam nulla id, malesuada erat. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Nulla posuere sollicitudin aliquam ultrices.',
  },
  {
    id: 2,
    title: 'Exploring new ways of decorating',
    presher: 'admin',
    date: '14 Oct 2022',
    category: 'Handmade',
    image: require('../images/Rectangle 68 (1).png'),
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod elementum nisi, quis eleifend quam adipiscing vitae. Nunc sed id semper risus.',
  },
  {
    id: 3,
    title: 'Handmade pieces that took time to make',
    presher: 'admin',
    date: '14 Oct 2022',
    category: 'Wood',
    image: require('../images/Rectangle 68 (2).png'),
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla malesuada pellentesque elit eget gravida cum sociis natoque. Ut tristique et egestas quis ipsum suspendisse ultrices.',
  },
  {
    id: 4,
    title: 'Handmade pieces that took time to make',
    presher: 'admin',
    date: '14 Oct 2022',
    category: 'Interior',
    image: require('../images/Rectangle 68 (2).png'),
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla malesuada pellentesque elit eget gravida cum sociis natoque. Ut tristique et egestas quis ipsum suspendisse ultrices.',
  },
  {
    id: 5,
    title: 'Handmade pieces that took time to make',
    presher: 'admin',
    date: '14 Oct 2022',
    category: 'Design',
    image: require('../images/Rectangle 68 (2).png'),
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla malesuada pellentesque elit eget gravida cum sociis natoque. Ut tristique et egestas quis ipsum suspendisse ultrices.',
  },
  {
    id: 6,
    title: 'Handmade pieces that took time to make',
    presher: 'admin',
    date: '14 Oct 2022',
    category: 'Crafts',
    image: require('../images/Rectangle 68 (2).png'),
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla malesuada pellentesque elit eget gravida cum sociis natoque. Ut tristique et egestas quis ipsum suspendisse ultrices.',
  },
];


  return (
    <>
      <Navbar backgroundColor='#ffff'/>
      <SctionOneShop title="Blogs">
        <span>Home <i className="fa-solid fa-angles-right"></i> Blogs</span>
      </SctionOneShop>

      <div className="blog-page-container container">
        <div className="main-content">
          <Postes posts={posts} searchTerm={searchTerm} />
        </div>

        {/* زر التبديل لعرض/إخفاء الشريط الجانبي */}
      

        <div className={`sidebar-container ${isSidebarVisible ? 'visible' : ''}`}>
          <Sidebar posts={posts} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>
      </div>

      <SectionThreeShop />
      <Footer />
    </>
  );
}

export default Blogs;
