import React from "react";

function Header() {
  return (
    <div className="text-white ml-48 mt-16 h-[524px]">
      <p>Hi, my name is</p>
      <h1 className="text-7xl font-bold text-gray-200 mt-5 mb-5">
        Frew Befakadu
      </h1>
      <h1 className="text-6xl font-bold text-gray-400 mb-5">
        I Make websites that capture users.
      </h1>
      <div className="w-1/2">
        <p className="text-gray-200">
          A Web Developer is a professional who is responsible for the design
          and construction of websites. They ensure that sites meet user
          expectations by ensuring they look good, run smoothly and offer easy
          access points with no loading issues between pages or error messages.
        </p>
      </div>

      <button className="pl-7 pr-7 pt-3 pb-3 border-white border-2 rounded mt-7">
        some button
      </button>
    </div>
  );
}

export default Header;
