import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import Logo2 from "./../../images/LOGO.png";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { GiHamburgerMenu } from "react-icons/gi";

const Nav = ({ backgroundColor }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  const handleSticky = () => {
    if (window.scrollY > 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleSticky);
  });
  return (
    <div className="main-container">
      <div className="w-full" style={{ backgroundColor: backgroundColor }}>
        <div className=" max-w-[1560px] mx-auto px-3 md:px-10 ">
          <div className="flex justify-between self-center items-center w-full md:py-[41px] py-6">
            <Link href={`/`}>
              <a>
                <img src={Logo2} alt="logo" className="" />
              </a>
            </Link>
            <ul className=" hidden lg:flex gap-[30px] self-center ">
              {links.map((link) => {
                const { id, text, url } = link;
                return (
                  <li key={id} className="flex self-center">
                    <Link href={url}>
                      <a className="  text-sm text-white font-semibold capitalize">
                        {text}
                      </a>
                    </Link>
                  </li>
                );
              })}
              <li>
                <Link href={"/"}>
                  <a className=" px-4 py-[13px] rounded-[7px] text-sm font-semibold text-white  header-btn capitalize">
                    Signup for Beta
                  </a>
                </Link>
              </li>
            </ul>

            <div className="lg:hidden block ">
              <button className="text-white text-[28px]" onClick={toggleDrawer}>
                <GiHamburgerMenu />
              </button>
              <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction="left"
                className=""
              >
                <div className="h-full w-full pt-6 mb-10 px-5 bg-bgBlack text-primary">
                  <Link href="/">
                    <a>
                      <img src={Logo2} alt="logo" />
                    </a>
                  </Link>
                  <ul className="flex flex-col px-4 mt-8 ">
                    {links.map((link) => {
                      const { id, text, url } = link;
                      return (
                        <li key={id} className="pb-5">
                          <Link href={url}>
                            <a className="capitalize  text-lg   ">{text}</a>
                          </Link>
                        </li>
                      );
                    })}
                    <li className="pt-5">
                      <Link href={"/"}>
                        <a className=" px-4 py-2 rounded-[7px] text-sm font-semibold text-white  header-btn capitalize">
                          Signup for Beta
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </Drawer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;

const links = [
  { id: 1, text: "Features", url: "/features" },
  { id: 2, text: "Solutions", url: "/solutions" },
  { id: 3, text: "Blockchain", url: "/blockchain" },
  { id: 4, text: "Explore", url: "/explore" },
  { id: 4, text: "Careers", url: "/careers" },
];
