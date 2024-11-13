import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./ProductDetails.css";
import Navbar from "../Components/Navbar";
import SectionDisc from "../ComponentProductDetails/SectionDisc";
import SectionRelated from "../ComponentProductDetails/SectionRelated";
import Footer from "../Components/Footer";
import { useDispatch } from "react-redux";
import { addToCart } from "../ComponentFor Cart/CartSlice";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("L");
  const [selectedColor, setSelectedColor] = useState("black");
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [cartProducts, setCartProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://dummyjson.com/products/${id}`
        );
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    const newProduct = {
      ...product,
      quantity,
      selectedSize,
      selectedColor,
    };

    // أضف المنتج إلى حالة cartProducts
    setCartProducts((prevCart) => [...prevCart, newProduct]);

    // تحديث Redux store
    dispatch(addToCart(newProduct));

    // إظهار النافذة المنبثقة
    setIsPopupVisible(true);
    // تحديث السعر الإجمالي
    setTotalPrice(
      (prevTotal) => prevTotal + newProduct.price * newProduct.quantity
    );
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  const handleRemoveItemFromCart = (index) => {
    const itemToRemove = cartProducts[index];
    const updatedCart = cartProducts.filter((_, i) => i !== index);
    setCartProducts(updatedCart);

    // تحديث إجمالي السعر
    const updatedTotal =
      totalPrice - itemToRemove.price * itemToRemove.quantity;
    setTotalPrice(updatedTotal);

    // إذا كانت السلة فارغة، أغلق النافذة المنبثقة
    if (updatedCart.length === 0) {
      setIsPopupVisible(false);
    }
  };

  const handeleViewCart = () => {
    navigate("/cart");
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  const handleCheckout = () => {
    navigate("/checkout", { state: { totalPrice, cartProducts } }); // الانتقال إلى صفحة الدفع وتمرير totalPrice
  };

  return (
    <>
      <Navbar backgroundColor="#ffff" />
      <br />
      <div className="product-detail-container">
        <div className="image-gallery">
          {product.images &&
            product.images.map((img, index) => (
              <img key={index} src={img} alt={`Thumbnail ${index + 1}`} />
            ))}
        </div>
        <div className="product-main-image">
          <img src={product.thumbnail} alt={product.title} />
        </div>

        <div className="product-info">
          <h1>{product.title}</h1>
          <p className="product-price">Rs. {product.price}</p>
          <div className="product-rating">
            <span>⭐⭐⭐⭐⭐</span>
            <span>5 Customer Reviews</span>
          </div>
          <p className="product-description">{product.description}</p>

          <div className="product-options">
            <div className="size-options">
              <span>Size:</span>
              {["L", "XL", "XS"].map((size) => (
                <button
                  key={size}
                  className={selectedSize === size ? "active" : ""}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>

            <div className="color-options">
              <span>Color:</span>
              {["black", "gold", "purple"].map((color) => (
                <button
                  key={color}
                  style={{ backgroundColor: color }}
                  className={selectedColor === color ? "active" : ""}
                  onClick={() => setSelectedColor(color)}
                ></button>
              ))}
            </div>
          </div>

          <div className="quantity-selector">
            <button
              onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
            >
              -
            </button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity(quantity + 1)}>+</button>
            <button className="add-to-cart-button" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
          <hr />

          <div className="product-details-meta">
            <p>SKU: SS001</p>
            <p>Category: Sofas</p>
            <p>Tags: Sofa, Chair, Home, Shop</p>
            <div className="share-icons">
              Share:
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-twitter"></i>
            </div>
          </div>
        </div>

        {/* Overlay for Popup */}
        {isPopupVisible && (
          <div className="overlay" onClick={handleClosePopup}></div>
        )}

        {/* Popup for Cart */}
        {isPopupVisible && cartProducts.length > 0 && (
          <div className="popup">
            <div className="popup-content">
              <button className="close-popup" onClick={handleClosePopup}>
                ×
              </button>
              <h2>Shopping Cart</h2>
              <hr />
              {cartProducts.map((item, index) => (
                <div className="cart-item" key={index}>
                  <img src={item.thumbnail} alt={item.title} />
                  <div className="cart-details">
                    <h3>{item.title}</h3>
                    <p>Price: Rs. {item.price}</p>
                    <p>Quantity: {item.quantity}</p>
                    <p>Size: {item.selectedSize}</p>
                    <p>Color: {item.selectedColor}</p>
                    <button
                      className="remove-button"
                      onClick={() => handleRemoveItemFromCart(index)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
              <div className="cart-footer">
                <h3>Total Price: Rs. {totalPrice}</h3>
                <button className="view-cart-button" onClick={handeleViewCart}>
                  View Cart
                </button>
                <button className="checkout-button" onClick={handleCheckout}>
                  Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <hr />
      <SectionDisc />
      <hr />
      <SectionRelated />
      <Footer />
    </>
  );
};

export default ProductDetail;
