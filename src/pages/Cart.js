import React from "react";
import "./Cart.css";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../Components/Navbar";
import SectionOneShop from "../ComponentForShop/SctionOneShop";
import { removeFromCart } from "../ComponentFor Cart/CartSlice";
import SectionThreeShop from "../ComponentForShop/SectionThreeShop";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom"; // استيراد useNavigate

const Cart = () => {
  const cartProducts = useSelector((state) => state.cart.cartProducts);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleCheckout = () => {
    navigate("/checkout", { state: { totalPrice,cartProducts } }); // الانتقال إلى صفحة الدفع وتمرير totalPrice
  };

  return (
    <>
      <Navbar backgroundColor="#ffff" />
      <SectionOneShop title="Cart">
        <span>
          Home <i className="fa-solid fa-angles-right"></i> Cart
        </span>
      </SectionOneShop>

      <div className="big-cart">
        <div className="cart-container">
          {cartProducts.length === 0 ? (
            <h2>Your cart is empty.</h2>
          ) : (
            cartProducts.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.thumbnail} alt={item.title} />
                <div className="cart-details">
                  <h4>{item.title}</h4>
                  <p>Price: Rs. {item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Size: {item.selectedSize}</p>
                  <p>Color: {item.selectedColor}</p>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="delete-button"
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="cart-footer-carts">
          <h1>Cart Totals</h1>
          <h3>Total Price: Rs. {totalPrice}</h3>
          <button className="checkout-button-cart" onClick={handleCheckout}>
            Checkout
          </button>
        </div>
      </div>

      <SectionThreeShop />

      <Footer />
    </>
  );
};

export default Cart;
