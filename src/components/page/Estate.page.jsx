import React from "react";
import { cart } from "../../assets/config/Cart.estate.jsx";
import CartBox from "../organism/CartBox.jsx";
import { useNavigate } from "react-router-dom";

function Estate() {
  const nav = useNavigate;
  return (
    <div
      className="flex justify-between flex-wrap gap-4"
      onClick={(e) => nav(item.url)}
    >
      {cart.map((item, index) => (
        <CartBox
          key={index}
          head={item.head}
          diteil={item.diteil}
          price={item.price}
          image={item.image}
        />
      ))}
    </div>
  );
}

export default Estate;
