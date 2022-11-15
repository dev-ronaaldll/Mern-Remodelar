import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-neutral-800 flex justify-between text-white items-center">
      <Link to="/" className=" font-bold mx-5 ">
        <h1>React MySQL</h1>
      </Link>

      <ul className="flex gap-x-1 bg-neutral-700 py-4 px-10 font-bold">
        <li>
          <Link to="/" className=" px-2 py-1 ">
            Home
          </Link>
        </li>
        <li>-</li>
        <li>
          <Link to="/new" className=" px-2 py-1">
            Create task
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
