import demoImage from "../assets/demo.jpg";
import { projectData } from "../Data";
import StyleProjects from "./StyleProjects";

function Projects() {
  return (
    <div className="flex flex-col ml-48 ">
      <h1 className="text-4xl font-bold text-white">some projects</h1>
      {projectData.data.map((project, index) => {
        return (
          <StyleProjects
            key={index}
            image={project.image}
            description={project.description}
            name={project.name}
          />
        );
      })}
    </div>
  );
}

export default Projects;
