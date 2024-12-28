import React from "react";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img className="w-full md:max-w-[450px]" src={assets.about_img} alt="" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>SmartGadgets, a home to all clothes that you love!</p>
          <p>Welcome to SmartGadgets, your destination for high-quality clothing. We offer a wide range of apparel, from everyday wear to designer pieces, ensuring there's something for everyone. Our goal is to provide a seamless shopping experience through innovative technology and a customer-first approach, inspiring confidence and elevating personal style</p>
          <b className="text-gray-800">Our Mission</b>
          <p>Our mission at SmartGadgets is to transform shopping by offering a diverse range of high-quality clothing. We provide exceptional value, convenience, and personalized service, making fashion accessible to everyone. Through innovative technology and a customer-centric approach, we create a seamless shopping experience that inspires confidence and elevates personal style.</p>
        </div>
      </div>

      <div className="text-xl py-4">
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20 ">
        <div className="border px-10 md:px-16 py-20 flex flex-col gap-5">
          <b>Quality Assurance: </b>
          <p className="text-gray-600">We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
        </div>
        <div className="border px-10 md:px-16 py-20 flex flex-col gap-5">
          <b>Convenience: </b>
          <p className="text-gray-600">With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
        </div>
        <div className="border px-10 md:px-16 py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service: </b>
          <p className="text-gray-600">Our team of dedicated professionals is here to assist you all the way, ensuring your satisfaction is our top priority.</p>
        </div>
      </div>

      <NewsletterBox/>

    </div>
  )
};

export default About;
