import { Link } from "react-scroll";
import { AiOutlineClose } from "react-icons/ai";

function MenuItems({ showmenu, active }) {
  return (
    <ul
      className={
        active
          ? "flex opacity-80  flex-col items-center fixed inset-0 justify-center left-1/4 gap-8 text-white bg-[#2F3C7E] md:hidden"
          : "hidden"
      }
    >
      <AiOutlineClose onClick={showmenu} size={30} />
      <li>
        <Link
          className="cursor-pointer p-6"
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
          className="cursor-pointer p-6"
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
          className=" cursor-pointer p-6"
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
          className=" cursor-pointer p-6"
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
  );
}

export default MenuItems;
