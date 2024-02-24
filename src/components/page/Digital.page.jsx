import React from "react";
import { digi } from "../../assets/config/Cart.digi.jsx";
import CartBox from "../organism/CartBox.jsx";
function Digital() {
  return (
    <div className="flex justify-between flex-wrap gap-4">
      {digi.map((item, index) => (
        <CartBox
          key={index}
          head={item.head}
          diteil={item.ditail}
          price={item.price}
          image={item.image}
        />
      ))}
    </div>
  );
}

export default Digital;
