import "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <header className="bg-green-50">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
            <div className="inline-flex rounded-lg border border-gray-100 rounded-lg bg-gray-100 p-1">


<NavLink to="setRole"  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "bg-white rounded-lg text-blue-500 shadow-sm" : ""
  }
>
  <button
    className="inline-block rounded-md  px-4 py-2 text-sm  focus:relative"
  >
    set role
  </button>

  </NavLink>


  <NavLink to="setBuyerProfile"  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "bg-white rounded-lg text-blue-500 shadow-sm" : ""
  }
>
  <button
    className="inline-block rounded-md  px-4 py-2 text-sm   focus:relative"
  >
   set user profile
  </button>

  </NavLink>

















</div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
