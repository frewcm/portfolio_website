import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-scroll";

function Header() {
  return (
    <div
      id="header"
      className="w-full h-[583px] bg-[#FBEAEB] flex items-center"
    >
      <div className="w-[60px] hidden lg:flex flex-col items-start justify-center">
        <div className="flex flex-col items-center justify-center w-14 h-64 bg-white rounded">
          <a
            className="cursor-pointer"
            href="https://www.linkedin.com/in/frew-befekadu-a0b44a225"
            target="_blank"
          >
            <BsLinkedin className="mb-5 mt-5" size={30} />
          </a>

          <a
            className="cursor-pointer"
            href="https://github.com/frewcm/"
            target="_blank"
          >
            <FaGithub className="mb-5 " size={30} />
          </a>
          <BsLinkedin className="mb-5 " size={30} />
          <BsLinkedin className="mb-5 " size={30} />
          <BsLinkedin className="mb-5 " size={30} />
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-4/5 flex flex-col items-center  lg:mr-14">
          <p className="text-3xl text-center md:text-5xl lg:text-6xl font-bold mb-10">
            HEY, I'M FREW BEFEKADU
          </p>
          <p className="lg:w-2/3 text-center leading-8">
            A Frontend focused Web Developer building the Frontend of Websites
            and Web Applications that leads to the success of the overall
            product
          </p>
          <Link
            to="projects"
            smooth={true}
            spy={true}
            offset={50}
            duration={500}
            className="w-44 p-4 mt-10 bg-[#2F3C7E] text-white rounded shadow-xl cursor-pointer text-center"
          >
            PROJECTS
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
