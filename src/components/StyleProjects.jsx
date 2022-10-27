import React from "react";

function StyleProjects({ image, description, name }) {
  return (
    <div className="flex h-[550px] -space-x-10 text-white">
      <div className="w-1/2">
        <img className="w-full" src={image} alt="image of project" />
      </div>
      <div className="w-1/2 flex flex-col items-end">
        <h1 className="mr-10 m-5">{name}</h1>
        <p className="mr-10 bg-green-900 p-5 rounded">{description}</p>
      </div>
    </div>
  );
}

export default StyleProjects;
