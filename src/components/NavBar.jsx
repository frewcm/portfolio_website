import { Link } from "react-scroll";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import MenuItems from "./MenuItems";

function NavBar() {
  const [active, setActive] = useState(false);
  const showmenu = () => {
    setActive(!active);
  };
  return (
    <div className="w-full h-[85px] flex items-center justify-between bg-white sticky top-0 shadow-sm">
      <Link
        className=" cursor-pointer"
        to="header"
        smooth={true}
        spy={true}
        offset={50}
        duration={500}
      >
        <div className="flex ml-8 lg:ml-12 items-center">
          <img
            className="w-14 rounded-full mr-3"
            src="/frew-background.jpg"
            alt="picture of frew"
          />
          <p className="hidden lg:flex text-lg font-bold">FREW BEFEKADU</p>
        </div>
      </Link>
      <div className="absolute right-6 md:hidden">
        <AiOutlineMenu
          onClick={showmenu}
          className={active ? "hidden" : "flex"}
          size={30}
        />
      </div>
      <div>
        <ul className="hidden md:flex text-[15px] font-bold space-x-12 mr-6 ">
          <li>
            <Link
              className="hover:text-[#2F3C7E] cursor-pointer p-6"
              to="header"
              smooth={true}
              spy={true}
              offset={50}
              duration={500}
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-[#2F3C7E] cursor-pointer p-6"
              to="about"
              smooth={true}
              spy={true}
              offset={50}
              duration={500}
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-[#2F3C7E] cursor-pointer p-6"
              to="projects"
              smooth={true}
              spy={true}
              offset={50}
              duration={500}
            >
              PROJECTS
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-[#2F3C7E] cursor-pointer p-6"
              to="contact"
              smooth={true}
              spy={true}
              offset={50}
              duration={500}
            >
              CONTACT
            </Link>
          </li>
        </ul>
      </div>

      <MenuItems showmenu={showmenu} active={active} />
    </div>
  );
}

export default NavBar;
