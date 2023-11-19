import { FaTrash } from "react-icons/fa";
import useCart from "../../../Hooks/useCart";
import Swal from "sweetalert2";
import useAxios from "../../../Hooks/useAxios";

const Cart = () => {
  const [cart, refetch] = useCart();
  const axios = useAxios();
  const totalPrice = cart?.reduce((total, item) => {
    return total + item.price;
    
  }, 0);
  const handleDelete = id =>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
            axios.delete(`/carts/${id}`)
            .then(res=>{
        if(res?.data?.deletedCount > 0){
                refetch();
            Swal.fire({
            title: "Deleted!",
            text: "Your cart item has been deleted.",
            icon: "success"
          });

          
          

                }
                else{
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Something went wrong!",
                        footer: '<a href="#">Why do I have this issue?</a>'
                      });
                }
            })
      
        }
      });
  }
  return (
    <div>
      <div className="flex justify-evenly mb-8">
        <h1 className="text-4xl">Items: {cart?.length}</h1>
        <h1 className="text-4xl">Total Price: {totalPrice}</h1>
        <button className="btn">Pay</button>
      </div>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
             <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>User Email</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {cart?.map((item, index) => (
              <tr key={item._id}>
                <td>{index+1}</td>
                
                <td>
                  
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item?.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    
                    
                  </div>
                </td>
                <td>
                <div className="font-bold">{item?.name}</div>
                </td>
                <td>
                 {item?.userEmail}
                  
                </td>
                <td>
                <div className="text-sm ">Price: ${item?.price}</div>
                </td>
               
                <th>
                  <button onClick={()=> handleDelete(item?._id)} className="btn btn-ghost btn-lg">
                    <FaTrash className="text-[red]"></FaTrash>
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
