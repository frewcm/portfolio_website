import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="flex items-center justify-between w-full h-20 box-shadow  text-white">
      <div className="ml-16">FB</div>
      <div className="flex mr-16 space-x-16">
        <p>About</p>
        <p>About</p>
        <p>About</p>
        <p>About</p>
      </div>
    </div>
  );
}

export default NavBar;
