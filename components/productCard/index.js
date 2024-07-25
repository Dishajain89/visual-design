import React from "react";
import Image from "next/image";

function ProductCard() {
   const cardData = [
      {
         img: "/img/card1.png",
         title: "Product Design",
         content: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
      },
      {
         img: "/img/card2.png",
         title: "Visual Design",
         content: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
      },
      {
         img: "/img/card3.png",
         title: "Art Direction",
         content: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
      },
   ];

   return (
      <div className="flex justify-center gap-8 my-8 mx-4 ">
         {cardData.map((data, index) => {
            return (
               <div  className="productCard" key={index}>
                  <Image src={data.img} width="100" height="100" alt="card-img" />
                  <h4 className="my-4 text-xl font-semibold">{data.title} </h4>
                  <p>{data.content}</p>
               </div>
            );
         })}
      </div>
   );
}

export default ProductCard;
