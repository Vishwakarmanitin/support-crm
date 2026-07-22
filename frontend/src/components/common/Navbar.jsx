import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  return (
    <nav className="bg-blue-700 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">
           CRM Support Desk
        </h1>

        <div className="flex gap-6">

          <Link
            to="/"
            className={location.pathname === "/" ? "font-bold underline" : ""}
          >
            Dashboard
          </Link>

          <Link
            to="/create-ticket"
            className={
              location.pathname === "/create-ticket" ? "font-bold underline" : ""
            }
          >
            Create Ticket
          </Link>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;