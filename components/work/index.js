"use client";
import React, { useState } from "react";
import Image from "next/image";

function Work() {
   const [modal, setModal] = useState(false);
   const workData = [
      {
         workImg: "/img/work1.png",
         workTitle: "Project title",
         workName: "UI, Art drection",
      },
      {
         workImg: "/img/work2.png",
         workTitle: "Project title",
         workName: "UI, Art drection",
      },
      {
         workImg: "/img/work3.png",
         workTitle: "Project title",
         workName: "UI, Art drection",
      },
      {
         workImg: "/img/work4.png",
         workTitle: "Project title",
         workName: "UI, Art drection",
      },
      {
         workImg: "/img/work5.png",
         workTitle: "Project title",
         workName: "UI, Art drection",
      },
      {
         workImg: "/img/work6.png",
         workTitle: "Project title",
         workName: "UI, Art drection",
      },
   ];
   return (
      <div className="flex flex-col justify-center items-center text-center">
         <h3 className="text-2xl font-semibold">Latest work</h3>
         <div className="grid grid-cols-3 gap-6 my-8">
            {workData.map((data, index) => {
               return (
                  <div key={index} onClick={() => setModal(!modal)} className="workCard text-left cursor-pointer">
                     <Image src={data.workImg} width="300" height="300" alt="card-img" />
                     <div className="my-4">
                        <h5 className="text-xl font-semibold">{data.workTitle} </h5>
                        <p className="font-medium">{data.workName} </p>
                     </div>
                  </div>
               );
            })}
         </div>

         {modal && (
            <div  className="fixed top-0 bg-black opacity-90 h-screen w-screen flex flex-col justify-center items-center ">
               <h4 onClick={() => setModal(!modal)} className="text-white text-4xl font-bold cursor-pointer absolute top-8 right-16">X</h4>
               <div className="border-8 border-white">
                  <Image src="/img/work1.png" width="400" height="300" alt="card-img" />
               </div>
            </div>
         )}
      </div>
   );
}

export default Work;
