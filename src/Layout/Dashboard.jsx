import { FaCalendar, FaHome, FaList, FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { MdRateReview } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import { MdBorderColor } from "react-icons/md";
import useCart from "../Hooks/useCart";
const Dashboard = () => {
     const [cart]= useCart()
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-[#D1A054]">
        <div className="menu">
          <li>
            <NavLink to="/dashboard/userHome">
              <FaHome></FaHome>
              User Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reservation">
              <FaCalendar></FaCalendar>
              Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/cart">
              <FaShoppingCart></FaShoppingCart>
              My Cart { cart?.length > 0 ? `(${cart?.length})` : ''}
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/review">
            <MdRateReview />
              Review
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/booking">
              <FaList></FaList>
              My Booking
            </NavLink>
          </li>
          <div className="divider"></div>
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
        </div>
      </div>
      <div className="flex-1 p-8">
    <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
