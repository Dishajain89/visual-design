import Image from "next/image";
import React from "react";

function Testimonial() {
   const testimonialData = [
      {
         review: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
         profilePic: "/img/ClientImg.png",
         name: "Gemma Nolen",
         work: "Google",
      },
      {
         review: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
         profilePic: "/img/ClientImg.png",
         name: "Gemma Nolen",
         work: "Google",
      },
      {
         review: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
         profilePic: "/img/ClientImg.png",
         name: "Gemma Nolen",
         work: "Google",
      },
      {
         review: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
         profilePic: "/img/ClientImg.png",
         name: "Gemma Nolen",
         work: "Google",
      },
      {
         review: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
         profilePic: "/img/ClientImg.png",
         name: "Gemma Nolen",
         work: "Google",
      },
      {
         review: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
         profilePic: "/img/ClientImg.png",
         name: "Gemma Nolen",
         work: "Google",
      },
   ];
   return (
      <div className="flex flex-col justify-center items-center text-center my-8">
         <h2 className="text-3xl font-semibold">Testimonial</h2>
         <div className="grid grid-cols-3 gap-6 my-8">
            {testimonialData.map((data, index) => {
               return (
                  <div key={index} className="testimonialCard">
                     <p className="text-xl font-semibold">{data.review} </p>
                     <div className="flex flex-row items-start gap-4">
                        <Image className="rounded-full" src={data.profilePic} width="50" height="50" alt="profile-pic" />
                        <div className="text-left">
                           <Image className="" src="/img/Stars.png" width="100" height="100" alt="star" />
                           <h6 className="font-semibold">{data.name} </h6>
                           <p>{data.work} </p>
                        </div>
                     </div>
                  </div>
               );
            })}
         </div>
      </div>
   );
}

export default Testimonial;
