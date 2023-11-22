import { useForm } from "react-hook-form";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa6";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxios from "../../../Hooks/useAxios";
import Swal from "sweetalert2";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const AddItems = () => {
  const axiosPublic = useAxiosPublic();
  const axios = useAxios()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit =async (data) => {
    console.log(data);
    const imageFile = {image:data.image[0]}
    const res = await axiosPublic.post(image_hosting_api,imageFile,{
      headers:{
        'Content-Type': 'multipart/form-data'
      }
    });
    if(res?.data?.success){
      //now send the new item data to the server
      const menuItem = {
        name: data.name,
        category:data.category,
        price:parseFloat(data.price),
        recipe:data.recipe,
        image:res.data.display_url

      }
      const menuResponse = await axios.post('/menu',menuItem)
      console.log(menuResponse.data)
      if(menuResponse.data.insertedId){
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title:`${data.name} is successfully added in menu`,
          showConfirmButton: false,
          timer: 1500
        });
      }
    }
  };
  return (
    <div>
      <SectionTitle
        heading={"add an item"}
        subHeading={"'What's new?"}
      ></SectionTitle>
      <div>
        <form onSubmit={handleSubmit(onSubmit)} >
          {/* register your input into the hook by invoking the "register" function */}
          
          <div className="form-control w-full my-5">
            <label className="label">
              <span className="label-text">Recipe Name*</span>
            </label>
            <input
            {...register("name",{ required: true })}
              type="text"
              placeholder="Recipe Name"
              className="input input-bordered w-full "
            />
          </div>
          {/* include validation with required or other standard HTML validation rules */}
         <div className="flex gap-6 ">
         <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Category Name*</span>
            </label>
            <select
            defaultValue='default'
            {...register("category", { required: true })}
            className="select select-warning w-full max-w-xs"
          >
            <option value="default" disabled selected hidden>
              Pick a Category
            </option>
            <option value="salad">Salad</option>
            <option value="pizza">pizza</option>
            <option value="soups">soups</option>
            <option value="desserts">Desserts</option>
            <option value="drinks">Drinks</option>
          </select>
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Price*</span>
            </label>
            <input
            {...register("price",{ required: true })}
              type="number"
              placeholder="price"
              className="input input-bordered w-full "
            />
          </div>
         
         </div>
         <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Recipe Details*</span>
            </label>
            <textarea   {...register("recipe",{ required: true })} className="textarea textarea-primary" placeholder="Recipe Details"></textarea>
          </div>

          <div>
          <input type="file" {...register("image",{ required: true })} className="file-input file-input-ghost w-full max-w-xs" />
          </div>
          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && <span>This field is required</span>}
          
          <button className="btn bg-[#D1A054] text-white">
             <span className="flex justify-center items-center ">
             Add Item <FaUtensils className="ml-2"></FaUtensils>
             </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
