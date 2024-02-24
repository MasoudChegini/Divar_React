import React from "react";
function CartBox({ head, price, diteil, image }) {
  return (
    <div className="flex border w-[420px] p-3  gap-20 rounded-md items-center justify-between">
      <div className="flex flex-col gap-10">
        <h3 className="font-extrabold">{head}</h3>
        <div className="text-gray-400">
          <p>{price}</p>
          <p>{diteil}</p>
        </div>
      </div>
      <div>
        <img className=" size-32 " src={image} alt="" />
      </div>
    </div>
  );
}

export default CartBox;
