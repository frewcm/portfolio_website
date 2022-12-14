import React from "react";
import { Link } from "react-scroll";

function About() {
  return (
    <div
      id="about"
      className="w-full pb-20 h-full lg:h-[850px] bg-[#FBEAEB] flex flex-col items-center"
    >
      <div className=" flex flex-col items-center">
        <div className="w-4/5 flex flex-col items-center justify-center">
          <p className="text-4xl font-bold">ABOUT ME</p>
          <hr className="border-4 w-10 border-[#2F3C7E] rounded mt-5 mb-5" />
          <p className="text-center text-gray-500 leading-7">
            Here you will find more information about me, what I do, and my
            current skills mostly in terms <br /> of programming and technology
          </p>
        </div>
        <div className="w-4/5 lg:w-full lg:grid lg:grid-cols-2 lg:space-x-20 mt-12 lg:mt-24">
          <div className=" flex flex-col items-center lg:ml-28 lg:flex lg:flex-col lg:items-start ">
            <p className="text-2xl font-bold">Get to know me</p>
            <div className=" lg:w-[550px] mt-10 text-gray-500">
              <p className="text-gray-500 leading-7">
                My name is Frew Befekadu and i'm a passionate Front end
                developer using web technologies to build websites that are
                functional and user friendly but at the same time attractive
                that leads to the success of the overall product. Check out some
                of my work in the Projects section.
              </p>
              <p className="text-gray-500 leading-7 mt-5">
                My keen interest in programming and design helps me find
                creative solutions to technical challenges and develop visually
                appealing websites. My extensive knowledge of technical
                standards helps me manage projects efficiently.
              </p>
              <p className="text-gray-500 leading-7 mt-5">
                I'm open to Job opportunities where I can contribute, learn and
                grow. If you have a good opportunity that matches my skills and
                experience then don't hesitate to contact me.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center mt-12 mb-6 lg:flex lg:flex-col lg:items-start">
            <p className="text-2xl font-bold lg:ml-3">My Skills</p>
            <div className="w-full lg:w-96 flex flex-wrap mt-5 lg:mt-10">
              <p className="bg-gray-200 p-3 m-2 text-gray-600">HTML</p>
              <p className="bg-gray-200 p-3 m-2 text-gray-600">CSS</p>
              <p className="bg-gray-200 p-3 m-2 text-gray-600">JavaScript</p>
              <p className="bg-gray-200 p-3 m-2 text-gray-600">React.js</p>
              <p className="bg-gray-200 p-3 m-2 text-gray-600">Next.js</p>
              <p className="bg-gray-200 p-3 m-2 text-gray-600">Tailwind css</p>
              <p className="bg-gray-200 p-3 m-2 text-gray-600">Node(express)</p>
              <p className="bg-gray-200 p-3 m-2 text-gray-600">MongoDB</p>
            </div>
          </div>
        </div>
      </div>
      <Link
        to="contact"
        smooth={true}
        spy={true}
        offset={50}
        duration={500}
        className=" w-44 p-4 lg:mt-8 bg-[#2F3C7E] text-white rounded shadow-xl text-center"
      >
        CONTACT
      </Link>
    </div>
  );
}

export default About;
