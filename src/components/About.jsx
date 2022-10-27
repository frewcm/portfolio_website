import React from "react";
import frewImage from "../assets/frew.jpg";

function About() {
  return (
    <div className="flex flex-col h-[550px] ml-48  text-white">
      <h1 className="text-4xl mb-10  font-bold">About me</h1>
      <div className="flex">
        <div className="w-1/2">
          <p>
            Describing himself as a tireless seeker of knowledge, an occasional
            purveyor of wisdom who just coincidentally happens to also be a
            graphic designer. He has a nice about me page that shows his current
            status, in this case, always available for new projects regarding
            identity and branding, print design and web design. His about me
            page uses a light gray background with orange arrows and characters.
            He has an owl avatar that shows a passion for illustrations. Have a
            look at his interesting website and his portfolio, but more
            importantly, see if his about me page serves as good inspiration for
            your projects.
          </p>
        </div>
        <div className="w-1/2">
          <img
            className="w-64 ml-10 rounded"
            src={frewImage}
            alt="image of frew"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
