import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import {  FaCartArrowDown, FaDollarSign, FaUsers } from "react-icons/fa";
import { MdFastfood } from "react-icons/md";
 

const AdminHome = () => {
    const {user}= useAuth();
    const axiosSecure = useAxiosSecure()
    const {data:stats }= useQuery({
        queryKey:['admin-stats'],
        queryFn: async ()=>{
            const res = await axiosSecure.get('/admin-stats')
            return res.data;

        }
    })
    return (
        <div>
            <h2 className="md:text-3xl text-xl mb-10">
                <span>Hi, Welcome</span>
                {
                    user?.displayName ? user.displayName : 'Back'
                }
                 </h2>

<div className="stats shadow stats-vertical lg:stats-horizontal text-center">
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      <FaDollarSign></FaDollarSign>
    </div>
    <div className="stat-title">Revenue</div>
    <div className="stat-value">{stats?.revenue}</div>
    <div className="stat-desc">Jan 1st - Feb 1st</div>
  </div>
  
  <div className="stat">
  <div className="stat-figure text-secondary">
      <FaUsers></FaUsers>
    </div>
    <div className="stat-title">Users</div>
    <div className="stat-value">{stats?.users}</div>
    <div className="stat-desc">↗︎ 400 (22%)</div>
  </div>
  <div className="stat">
  <div className="stat-figure text-secondary">
  <MdFastfood />
    </div>
    <div className="stat-title">Menu Items</div>
    <div className="stat-value">{stats?.menuItems}</div>
    <div className="stat-desc">↗︎ 400 (22%)</div>
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
        <FaCartArrowDown></FaCartArrowDown>
      
    </div>
    <div className="stat-title">Orders</div>
    <div className="stat-value">{stats?.orders}</div>
    <div className="stat-desc">↘︎ 90 (14%)</div>
  </div>
  
</div>

           
        </div>
    );
};

export default AdminHome;