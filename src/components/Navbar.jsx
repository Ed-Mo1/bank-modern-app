import { useState } from "react";
import { navLinks } from "../constants/index";
import { close, logo, menu } from "../assets";
const Navbar = () => {
  const [toogle, setToogle] = useState(false);
  return (
    <nav className="flex justify-between items-center w-full py-6 navbar">
      <img src={logo} className="w-[124px] h-[32px]" />
      <ul className="list-none sm:flex hidden flex-1 justify-end items-center gap-5">
        {navLinks.map(({ id, title }, i) => (
          <li
            key={i}
            className="font-poppins font-normal cursor-pointer text-[16px] text-white"
          >
            <a href={`#${id}`}>{title}</a>
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          className="object-contain w-[28px] aspect-square cursor-pointer"
          src={toogle ? close : menu}
          onClick={() => setToogle((prev) => !prev)}
        />
        <div
          className={`${
            toogle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex  flex-1 justify-end items-center gap-5 flex-col">
            {navLinks.map(({ id, title }, i) => (
              <li
                key={i}
                className="font-poppins font-normal cursor-pointer text-[16px] text-white"
              >
                <a href={`#${id}`}>{title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
