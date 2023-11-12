import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = (
    <>
      <li><NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-[#EEFF25] hover:text-white" : ""
        }
      >
        Home
      </NavLink></li>
    
      <li>
      <NavLink
        to="/contact"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-[#EEFF25] hover:text-white" : ""
        }
      >
        Contact Us
      </NavLink>
      </li>
      <li>
      <NavLink
        to="/dashboard"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-[#EEFF25] hover:text-white" : ""
        }
      >
        Dashboard
      </NavLink>
      </li>
     <li>
     <NavLink
        to="/menu"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-[#EEFF25] hover:text-white" : ""
        }
      >
        Our Menu
      </NavLink>
     </li>
     <li>
     <NavLink
        to="/shop"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-[#EEFF25] hover:text-white" : ""
        }
      >
        Our Shop
      </NavLink>
     </li>
    </>
  );
  return (
    <div>
      <div className="navbar fixed z-10 bg-black bg-opacity-50 max-w-screen-xl mx-auto text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-6 z-[1] p-2 shadow bg-black rounded-box w-52 text-xl font-medium"
            >
              {/* list item  */}
              {navLinks}
            </ul>
          </div>
          <Link to='/'>
          <div className="ml-8">
           <div>
           <p className="md:text-2xl font-bold block">BISTRO BOSS <br />
            
            </p>
            <p className="md:text-xl font-medium block">Restaurant</p>
           </div>
           
          </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-xl font-medium">
            {/* list item */}
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
