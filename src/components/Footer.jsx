import { BsLinkedin } from "react-icons/bs";

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
            <BsLinkedin className="text-white" size={25} />
            <BsLinkedin className="text-white" size={25} />
            <BsLinkedin className="text-white" size={25} />
            <BsLinkedin className="text-white" size={25} />
            <BsLinkedin className="text-white" size={25} />
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
