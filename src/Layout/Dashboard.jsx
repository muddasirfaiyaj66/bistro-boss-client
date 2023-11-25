import {
  
  FaCalendar,
  FaEnvelope,
  FaHome,
  FaList,
  FaShoppingCart,
  
  FaUtensils,
} from "react-icons/fa";
import { FaBookBookmark, FaUsers } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import { MdRateReview } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import { MdBorderColor } from "react-icons/md";
import useCart from "../Hooks/useCart";
import useAdmin from "../Hooks/useAdmin";
const Dashboard = () => {
  const [cart] = useCart();
  //Todo: get isAdmin Value from database
  const [isAdmin] = useAdmin();
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-[#D1A054]">
        <div className="menu">
          {isAdmin ?
           <>
           <li>
           <NavLink to="/dashboard/adminHome">
             <FaHome></FaHome>
             Admin Home
           </NavLink>
         </li>
         <li>
           <NavLink to="/dashboard/addItems">
             <FaUtensils></FaUtensils>
             Add Items
           </NavLink>
         </li>
         <li>
           <NavLink to="/dashboard/manageItems">
             <FaList></FaList>
            Manage Items
           </NavLink>
         </li>
         <li>
           <NavLink to="/dashboard/manageBooking">
           <FaBookBookmark />
            Manage Booking
           </NavLink>
         </li>
         <li>
           <NavLink to="/dashboard/allUsers">
           <FaUsers></FaUsers>
            All Users
           </NavLink>
         </li>
           </>
           : 
           <>
           <li>
             <NavLink to="/dashboard/userHome">
               <FaHome></FaHome>
               User Home
             </NavLink>
           </li>
           {/* <li>
             <NavLink to="/dashboard/paymentHistory">
               <FaCalendar></FaCalendar>
               Payment History
             </NavLink>
           </li> */}
           <li>
             <NavLink to="/dashboard/cart">
               <FaShoppingCart></FaShoppingCart>
               My Cart {cart?.length > 0 ? `(${cart?.length})` : ""}
             </NavLink>
           </li>
           <li>
             <NavLink to="/dashboard/review">
               <MdRateReview />
               Review
             </NavLink>
           </li>
           <li>
             <NavLink to="/dashboard/paymentHistory">
             <FaBookBookmark />
              Payment History
             </NavLink>
           </li>
         </>
          }
          <div className="divider"></div>
          {/* Shared navLinks */}
          <li>
            <NavLink to="/">
              <FaHome></FaHome>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">
              <IoMenu />
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">
              <MdBorderColor />
              Order
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              <FaEnvelope />
              Contact
            </NavLink>
          </li>
        </div>
      </div>
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;