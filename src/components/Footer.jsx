import { AiFillInstagram, AiFillTwitterSquare } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <div className="w-full lg:h-96 bg-black pb-10 flex flex-col items-center">
      <div className="w-full h-full grid grid-cols-1 space-y-5 lg:grid lg:grid-cols-2 gap-1 p-20">
        <div className="w-full lg:w-3/4 flex flex-col items-center lg:items-start">
          <p className="text-white text-2xl font-bold mb-5">FREW BEFEKADU</p>
          <p className="text-white text-center lg:text-start lg:w-full md:w-1/2">
            A Frontend focused Web Developer building the Frontend of Websites
            and Web Applications that leads to the success of the overall
            product
          </p>
        </div>
        <div className="w-full h-full flex flex-col items-center lg:items-end">
          <p className="text-2xl font-bold text-white text-start mb-5">
            SOCIAL
          </p>
          <div className="flex space-x-3">
            <a
              className="cursor-pointer"
              href="https://www.linkedin.com/in/frew-befekadu-a0b44a225"
              target="_blank"
            >
              <BsLinkedin
                className="  text-gray-200 hover:text-white"
                size={30}
              />
            </a>

            <a
              className="cursor-pointer"
              href="https://github.com/frewcm/"
              target="_blank"
            >
              <FaGithub className=" text-gray-200 hover:text-white" size={30} />
            </a>
            <a
              className="cursor-pointer"
              href="https://github.com/frewcm/"
              target="_blank"
            >
              <AiFillTwitterSquare
                className=" text-gray-200 hover:text-white"
                href="https://twitter.com/home"
                size={30}
              />
            </a>

            <a
              className="cursor-pointer"
              href="https://twitter.com/home"
              target="_blank"
            >
              <AiFillInstagram
                className=" text-gray-200 hover:text-white"
                size={30}
              />
            </a>
          </div>
        </div>
      </div>
      <hr className="w-11/12 " />

      <div className="flex text-xs mt-10 space-x-1">
        <p className="text-white">
          &copy; copyright {new Date().getFullYear()}. Made by
        </p>
        <p className="text-white underline">Frew Befekadu</p>
      </div>
    </div>
  );
}

export default Footer;
