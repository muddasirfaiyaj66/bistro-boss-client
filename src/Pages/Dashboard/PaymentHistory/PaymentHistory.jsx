import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const PaymentHistory = () => {
    const { user}= useAuth();
    const axiosSecure = useAxiosSecure()
    const {data: payments}=useQuery({
        queryKey:['payments', user?.email],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/payments/${user?.email}`)
           return res.data;
        }
    })
    return (
        <div>
            <h2 className="text-3xl">Total Payments: {payments?.length}</h2>


            <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Email</th>
        <th>Price</th>
        <th>Transaction Id</th>
        <th>Date</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      
        {payments?.map((item,idx)=> 
       <tr key={item._id}>
         <th>{idx+1}</th>
        <td>{item?.email}</td>
        <td>{item?.price}</td>
        <td>{item?.transactionId}</td>
        <td>{item?.date}</td>
        <td>{item?.status}</td>
        
       </tr>
        
        )}
     
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default PaymentHistory;