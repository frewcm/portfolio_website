import Data from "../Data.js";
import Project from "./Project.jsx";

function AllProjects() {
  console.log(Data);
  return (
    <div id="projects" className="pb-20 bg-[#FBEAEB]">
      <div className="flex flex-col items-center justify-center">
        <p className="text-4xl font-bold">PROJECTS</p>
        <hr className="border-4 w-10 border-[#2F3C7E] rounded mt-5 mb-5" />
        <p className="text-center text-gray-500 leading-7">
          Here you find some of the projects that i have done.
        </p>
      </div>
      {Data.data.map((project) => {
        return (
          <Project
            key={project.name}
            name={project.name}
            description={project.description}
            image={project.image}
            github={project.github}
            externalLink={project.externalLink}
          />
        );
      })}
    </div>
  );
}

export default AllProjects;
