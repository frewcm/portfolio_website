import { RxExternalLink } from "react-icons/rx";
import { FaGithub } from "react-icons/fa";

function Project({ name, description, image, github, externalLink }) {
  return (
    <div className="w-full lg:h-[550px] bg-[#FBEAEB] flex flex-col">
      <div className="lg:ml-28 flex flex-col items-center">
        <div className="w-full grid grid-cols-1 lg:grid lg:grid-cols-2 lg:gap-6 mt-20">
          <div className="flex flex-col items-center lg:items-start ">
            <img
              className="w-11/12 md:w-2/3 lg:w-full h-64 md:h-96 lg:h-96 object-cover rounded"
              src={image}
              alt=""
            />
          </div>
          <div className="flex flex-col justify-center items-center lg:items-start ">
            <div className="w-3/4 h-full flex flex-col justify-center items-center ">
              <p className="text-2xl mt-5 font-bold">{name}</p>
              <p className="text-gray-500 leading-7 mt-8 text-center">
                {description}
              </p>
              <div className="flex space-x-5 mt-10">
                <a href={github} target="_blank">
                  <FaGithub className="text-[#2F3C7E]" size={30} />
                </a>
                <a href={externalLink} target="_blank">
                  <RxExternalLink className="text-[#2F3C7E]" size={30} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
