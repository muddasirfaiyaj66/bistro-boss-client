import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../Hooks/useCart";

const Navbar = () => {
  const [cart]= useCart()
  const {user,logOut}= useAuth();
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
        to="/order/salad"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-[#EEFF25] hover:text-white" : ""
        }
      >
        Order
      </NavLink>
     </li>
     <li>
     <Link
        to="/dashboard"
        
      >
       <button className="btn btn-sm">
        <FaShoppingCart></FaShoppingCart>
        
        <div className="badge badge-secondary">+{cart?.length}</div>
       </button>
      </Link>
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
        {user?.email ? (
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img
                      src={user.photoURL ? user.photoURL : ""}
                      alt={user.displayName}
                    />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <button className="btn btn-sm text-black mb-3  btn-ghost">
                      {user.displayName}
                    </button>
                  </li>
                  <li>
                    <button
                      className="btn btn-sm  btn-ghost bg-red-500 text-white font-bold"
                      onClick={logOut}
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/login">
                <button className="btn btn-sm  btn-ghost hover:bg-[#F47025] px-8 bg-black text-white font-bold">
                  Login
                </button>
              </Link>
            )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
