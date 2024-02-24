import React from "react";
import { IoMdShare } from "react-icons/io";
import { PiBookmarkFill } from "react-icons/pi";
import { cart } from "../../assets/config/Cart.estate.jsx";
import CartBox from "../organism/CartBox.jsx";
import ProductSwiper from "../organism/Swiper.product.jsx";
function Product() {
  return (
    <div className="flex">
      <div className="flex flex-col gap-14">
        <div className=" flex flex-col gap-7">
          <h1 className="text-3xl">آپارتمان 135 متری</h1>
          <p>آژانس املاک تهران</p>
        </div>
        <div className="flex gap-20  items-center">
          <div className=" flex gap-5">
            <button className="border w-32 rounded-lg h-10 text-white bg-red-700">
              اطلاعات تماس{" "}
            </button>
            <button className="border w-32 rounded-lg h-10 text-black">
              چت
            </button>
          </div>
          <div className="flex gap-3">
            <IoMdShare />
            <PiBookmarkFill />
          </div>
        </div>
        <div className="flex flex-col gap-8 w-[50%]">
          <p>توضیحات</p>
          <p>
            گروه فنی مهندسی امین گستر در راستای خدمات رسانی به شما عزیزان گرد هم
            آمده و خدماتی اعم از فروش انواع منابع دوجداره و کوئل دار فیلتر شنی و
            مبدل وکلیه اقلام مربوط به راه اندازی موتورخانه مسکونی یا تجاری
            ،ویلایی ،استخر نصب راه اندازی با تیم فوق حرفه ای با ۱۵ سال تجربه
            عملی در اجراء و طراحی های موتور خانه های بنام تهران وشهرستان کارنامه
            ای درخشان را در دست دارند با امید رضایت ،دلخوشی شما هم‌میهنان عزیز
          </p>
        </div>
      </div>
      <ProductSwiper />
    </div>
  );
}

export default Product;
