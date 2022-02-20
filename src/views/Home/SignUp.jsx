import React from "react";

function SignUp() {
  return (
    <div>
      <div className="main-container xl:pb-[299px] lg:pb-[199px] pb-20 lg:pt-[100px] md:pt-20 pt-16">
        <div className="text-center">
          <h4 className="font-medium text-[46px] text-white pb-5">
            Sign Up for Beta
          </h4>
          <p className="font-medium text-lg text-primary mb-[45px]">
            Short description goes here
          </p>
          <div className="md:max-w-[474px] max-w-full mx-auto">
            <div className="flex md:flex-nowrap flex-wrap justify-center">
              <div className="md:max-w-[314px] max-w-full">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="focus:outline-none pb-[18px] pt-3 bg-bgBlack border  border-primary rounded-[7px] pl-4 placeholder:text-base placeholder:text-primary placeholder:font-medium "
                />
              </div>
              <a className="md:max-w-auto max-w-full md:px-4 px-8 md:mt-0 mt-4 md:py-2 py-5 flex items-center rounded-[7px] text-sm font-semibold text-white  header-btn capitalize">
                Signup for Beta
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
