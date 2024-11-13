import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar";
import SctionOneShop from "../ComponentForShop/SctionOneShop";
import "./Checkout.css";
import Swal from "sweetalert2";
import SectionThreeShop from "../ComponentForShop/SectionThreeShop";
import Footer from "../Components/Footer";

const Checkout = () => {
  const location = useLocation();
  const { totalPrice = 0, cartProducts = [] } = location.state || {};

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    country: "Country / Region",
    address: "",
    city: "",
    province: "Province",
    zipCode: "",
    phone: "",
    email: "",
    additionalInfo: "",
  });

  useEffect(() => {
    const savedData = localStorage.getItem("billingData");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("billingData", JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleOrderPlacement = () => {
    // التحقق من الحقول الفارغة
    const { firstName, lastName, address, city, zipCode, phone, email } =
      formData;

    if (
      !firstName ||
      !lastName ||
      !address ||
      !city ||
      !zipCode ||
      !phone ||
      !email
    ) {
      Swal.fire({
        icon: "warning",
        title: "Complete the required fields!",
        text: "Please fill in all the required fields.",
      });
    } else {
      Swal.fire("Payment is Success!");
      setFormData({
        firstName: "",
        lastName: "",
        companyName: "",
        country: "Country / Region",
        address: "",
        city: "",
        province: "Province",
        zipCode: "",
        phone: "",
        email: "",
        additionalInfo: "",
      });
    }
  };

  return (
    <>
      <Navbar backgroundColor="#ffff" />
      <SctionOneShop title="Checkout">
        <span>
          Home <i className="fa-solid fa-angles-right"> </i> Checkout
        </span>
      </SctionOneShop>

      <div className="checkout-container">
        <div className="billing-details">
          <h3>Billing Details</h3>
          <form className="billing-form">
            <div className="name-fields">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
              />
            </div>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="Company Name (Optional)"
            />
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
            >
              <option>Country / Region</option>
              <option>Sri Lanka</option>
              <option>Sri Lanka</option>
              <option>Sri Lanka</option>
            </select>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Street address"
            />
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="Town / City"
            />
            <select
              name="province"
              value={formData.province}
              onChange={handleChange}
            >
              <option>Province</option>
              <option>Western Province</option>
              <option>Western Province</option>
              <option>Western Province</option>
              <option>Western Province</option>
            </select>
            <input
              type="text"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              placeholder="ZIP code"
            />
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email address"
            />
            <textarea
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleChange}
              placeholder="Additional Information"
            ></textarea>
          </form>
        </div>

        <div className="checkout-summary">
          <h3>Product</h3>
          <h3>Subtotal</h3>
          <hr />
          {cartProducts.length > 0 ? (
            cartProducts.map((product, index) => (
              <div key={index} className="product-item">
                <p>
                  {product.title} x {product.quantity}
                </p>
                <p>Rs. {product.price * product.quantity}</p>
              </div>
            ))
          ) : (
            <p>No products in the cart.</p>
          )}
          <hr />
          <div className="total">
            <p>Subtotal</p>
            <p>Rs. {totalPrice}</p>
          </div>
          <div className="total">
            <h3>Total</h3>
            <h3>Rs. {totalPrice}</h3>
          </div>

          <div className="payment-method">
            <input type="radio" id="bank" name="payment" defaultChecked />
            <label htmlFor="bank">
              <strong>Direct Bank Transfer</strong>
            </label>
            <p>
              Make your payment directly into our bank account. Please use your
              Order ID as the payment reference. Your order will not be shipped
              until the funds have cleared in our account.
            </p>
            <input type="radio" id="cod" name="payment" />
            <label htmlFor="cod">Cash On Delivery</label>
          </div>

          <div className="privacy-policy">
            <p>
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our{" "}
              <Link to="/privacy">privacy policy</Link>.
            </p>
          </div>

          <button className="place-order-button" onClick={handleOrderPlacement}>
            Place order
          </button>
        </div>
      </div>
      <SectionThreeShop />

      <Footer />
    </>
  );
};

export default Checkout;
