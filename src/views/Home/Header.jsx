import React from "react";
import HeaderImg from "./../../images/Bitmap.png";
import HeaderLeft from "./../../images/Group 16 Copy 3.png";
import Headerright from "./../../images/Group 16 Copy 5.png";

function Header() {
  return (
    <div>
      <div className="main-conatiner text-white lg:pt-[184px]  pt-20">
        <div className="inner-container text-center">
          <h1 className="font-medium flex flex-wrap justify-center lg:text-[46px] text-4xl leading-[56px] pb-[21px]">
            Turn Events into{" "}
            <span className="Communities mx-3">Communities</span>
          </h1>
          <p className="pb-[35px] font-medium md:text-lg text-base">
            A home for your community, supporting live events with many
            conversations, icebreakers, and forums so conversations can continue
            between events
          </p>
          <div className="flex justify-center pb-[85px]">
            <div className="flex gap-[25px]">
              <div className="text-sm font-semibold">
                <a className=" px-4 py-[10px] rounded-[7px] text-sm font-semibold text-white  header-btn capitalize">
                  Signup for Beta
                </a>
              </div>
              <div className="text-sm font-semibold">
                <a href="/">Learn More</a>
              </div>
            </div>
          </div>
          <div className="relative pb-24">
            <div>
              <img
                src={HeaderLeft}
                alt=""
                className="absolute -left-[237px] -top-[103px] z-10 hide-923"
              />
            </div>
            <div>
              <img src={HeaderImg} alt="" className="z-20" />
            </div>
            <img
              src={Headerright}
              alt=""
              className="absolute -right-[97px] -bottom-[33px] z-10 hide-923"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
