import React from "react";
import { car } from "../../assets/config/Cart.Car.jsx";
import CartBox from "../organism/CartBox.jsx";
function Car() {
  return (
    <div className="flex justify-between flex-wrap gap-4">
      {car.map((item, index) => (
        <CartBox
          key={index}
          head={item.head}
          diteil={item.ditail}
          image={item.image}
          price={item.price}
        />
      ))}
    </div>
  );
}

export default Car;
