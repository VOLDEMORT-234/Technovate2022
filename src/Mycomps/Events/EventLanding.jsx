import React, { useState } from "react";
import { Navbar } from "../Navbar";
import { Cultural } from "./Cultural";
import { Informal } from "./Informal";
import { MockEvent } from "./MockEvent";
import { Technical } from "./Technical";
import { ProNights } from "./ProNights";

export const EventLanding = () => {
  const [ShowItems, setShowItems] = useState(3);

  return (
    <div>
      <div
        className="bg-cover sm:pt-6 bg-center text-white bg-no-repeat flex flex-col justify-center items-center relative z-10"
        style={{ backgroundImage: "url(./Images/Background.jpg)" }}
      >
        <div className=" w-full">
          <Navbar />
        </div>
        <div className="hidden sm:absolute right-0 top-3 z-0">
          <img
            src="./Images/Event/Spaceman.png "
            className="w-[200px] h-[233px]"
            alt=""
          />
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 xs:space-x-5 py-20">
          <div className="flex flex-col xs:flex-row md:hidden justify-center items-center xs:space-x-5 xs:mb-4 space-y-4 xs:space-y-0">
           

          <div
            className={`w-[210px] text-center uppercase text-3xl spaced tracking-widest rounded-xl border px-4 py-2 cursor-pointer hover:border-[#E72D2D] hover:text-[#E72D2D] transition-colors duration-300 ${
              ShowItems === 3
                ? "border border-[#E72D2D] text-[#E72D2D]"
                : "border border-[#F5F5F5]"
            }`}
            onClick={() => setShowItems(3)}
          >
            ProNights
          </div>

            <div
              className={`w-[210px] text-center uppercase text-3xl spaced tracking-widest rounded-xl border px-4 py-2 cursor-pointer hover:border-[#E72D2D] hover:text-[#E72D2D] transition-colors duration-300 ${
                ShowItems === 0
                  ? "border border-[#E72D2D] text-[#E72D2D]"
                  : "border border-[#F5F5F5]"
              }`}
              onClick={() => setShowItems(0)}
            >
              Cultural
            </div>

            <div
              className={`w-[210px] text-center uppercase text-3xl spaced tracking-widest rounded-xl border px-4 py-2 cursor-pointer hover:border-[#E72D2D] hover:text-[#E72D2D] transition-colors duration-300 ${
                ShowItems === 1
                  ? "border border-[#E72D2D] text-[#E72D2D]"
                  : "border border-[#F5F5F5]"
              }`}
              onClick={() => setShowItems(1)}
            >
              Technical
            </div>


          </div>

          <div
            className={`hidden md:block w-[210px] text-center uppercase text-3xl spaced tracking-widest rounded-xl border px-4 py-2 cursor-pointer hover:border-[#E72D2D] hover:text-[#E72D2D] transition-colors duration-300 ${
              ShowItems === 3
                ? "border border-[#E72D2D] text-[#E72D2D]"
                : "border border-[#F5F5F5]"
            }`}
            onClick={() => setShowItems(3)}
          >
            ProNights
          </div>

          <div
            className={`hidden md:block w-[210px] text-center uppercase text-3xl spaced tracking-widest rounded-xl border px-4 py-2 cursor-pointer hover:border-[#E72D2D] hover:text-[#E72D2D] transition-colors duration-300 ${
              ShowItems === 0
                ? "border border-[#E72D2D] text-[#E72D2D]"
                : "border border-[#F5F5F5]"
            }`}
            onClick={() => setShowItems(0)}
          >
            Cultural
          </div>



          <div
            className={`hidden md:block w-[210px] text-center uppercase text-3xl spaced tracking-widest rounded-xl border px-4 py-2 cursor-pointer hover:border-[#E72D2D] hover:text-[#E72D2D] transition-colors duration-300 ${
              ShowItems === 1
                ? "border border-[#E72D2D] text-[#E72D2D]"
                : "border border-[#F5F5F5]"
            }`}
            onClick={() => setShowItems(1)}
          >
            Technical
          </div>



          <div
            className={`w-[210px] text-center uppercase text-3xl spaced tracking-widest rounded-xl border px-4 py-2 cursor-pointer hover:border-[#E72D2D] hover:text-[#E72D2D] transition-colors duration-300 ${
              ShowItems === 2
                ? "border border-[#E72D2D] text-[#E72D2D]"
                : "border border-[#F5F5F5]"
            }`}
            onClick={() => setShowItems(2)}
          >
            Informal
          </div>






        </div>
        <div className="my-5">
          {ShowItems === 0 ? (
            <Cultural />
          ) : ShowItems === 1 ? (
            <Technical />
          ) : ShowItems === 2 ?(
            <Informal />
          ):(
            <ProNights />
          )}
        </div>
      </div>
    </div>
  );
};
