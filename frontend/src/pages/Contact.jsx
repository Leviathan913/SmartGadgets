import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";


const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={'CONTACT'} text2={'US'}/>
      </div>

      <div className="my-10 flex flex-col jsutify-center md:flex-row gap-10 mb-28">
        <img className="w-full md:max-w-[480px]" src={assets.contact_img} alt="" />
        <div className="flex flex-col jsutify-center items-start gap-6">
          <br /><br />
          <p className="font-semibold text-xl text-gray-600">Our Store</p>
          <p className="text-gray-500">4kilo <br /> Addis Ababa, Ethiopia</p>
          <p className="text-gray-500">Tel: +251911223344 <br /> Email: smartgadgets@gmail.com</p>
          
        </div>
      </div>
      <NewsletterBox/>
    </div>
  )
};

export default Contact;
