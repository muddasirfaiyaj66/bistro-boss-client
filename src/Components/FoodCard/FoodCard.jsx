import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxios from "../../Hooks/useAxios";


const FoodCard = ({item}) => {
  const {image,price,recipe, name, _id }= item;
  const navigate = useNavigate();
  const location = useLocation();
  const {user}= useAuth();
  const axios= useAxios();
  const handleAddToCart = food => {
    console.log(food);
    if(user && user.email){
      const cartItem = {
        userEmail: user.email,
        name,
        image,
        price,
        menuId: _id
      };
      axios.post('/carts',cartItem)
      .then(res=>{
       if(res.data.insertedId){
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${name} added to your cart  successfully` ,
          showConfirmButton: false,
          timer: 1500
        });
       }
      }
        
        )
    }
    else{
      Swal.fire({
        title: "You are not login",
        text: "Please log in",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login"
      }).then((result) => {
        if (result.isConfirmed) {
         navigate('/login', {state:{from:location}})
        }
      });
    }
  }
    return (
        <div className="card md:w-[424px] md:h-[541px] card-compact  bg-base-100 shadow-xl">
        <figure>
          <img
            src={image}
            className="h-full w-full object-cover"
            alt="Card"
          />
        </figure>
        <p className="absolute bg-slate-950 right-0 text-white mr-4 mt-4 px-4 rounded-sm">${price}</p>
        <div className="card-body">
          <h2 className=" text-center text-2xl font-medium">{name}</h2>
          <p className="text-center px-4">
           {recipe}
          </p>
          <div className="card-actions justify-center">
            <button 
            onClick={()=> handleAddToCart(item)}
            className="btn bg-[#E8E8E8] border-b-[#BB8506] border-b-2  text-[#BB8506]">
              add to cart
            </button>
          </div>
        </div>
      </div>
    );
};

export default FoodCard;