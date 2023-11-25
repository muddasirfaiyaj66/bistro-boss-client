import { FaTrash } from "react-icons/fa6";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useMenu from "../../../Hooks/useMenu";
import { FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const ManageItems = () => {

  const [menu, loading, refetch] = useMenu();
  const axiosSecure = useAxiosSecure()
  const handleDelete = item => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/menu/${item._id}`)
        .then((res) => {
          if (res?.data?.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: `${item.name} has been deleted.`,
              icon: "success",
            });
          } 
          
        })
        .catch((error) => {
          console.error("Error deleting item:", error);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="#">Why do I have this issue?</a>',
          });
        });
      }
    });
  };
  return (
    <div>
      <SectionTitle
        heading={"Manage All Items"}
        subHeading={"Hurry up"}
      ></SectionTitle>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Update</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {menu?.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>

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
                  <div className="text-sm ">Price: ${item?.price}</div>
                </td>
                <td>
                  <Link to={`/dashboard/updateItem/${item._id}`}>
                  <button className="btn text-xl">
                    <FaEdit></FaEdit>
                  </button>
                  </Link>
                </td>

                <td>
                  <button
                    onClick={() => handleDelete(item)}
                    className="btn btn-ghost btn-lg"
                  >
                    <FaTrash className="text-[red]"></FaTrash>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageItems;
