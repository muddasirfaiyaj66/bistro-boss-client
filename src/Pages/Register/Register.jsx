import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { BiShowAlt, BiHide } from "react-icons/bi";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import HelmetTitle from "../../Components/Helmet/HelmetTitle";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const axiosPublic = useAxiosPublic()
  const { createUser, handleUpdateProfile } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/';
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const image = form.image.value;

    const accepted = event.target.terms.checked;

    if (password.length < 6) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password should be at least 6 character or longer",
      });

      return;
    } else if (!/[A-Z]/.test(password)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Your password should have at lest one uppercase characters. ",
      });

      return;
    } else if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
      Swal.fire({
        icon: "error",
        title: "OOps...",
        text: 'Include at least one special character, such as "@" or "#"',
      });

      return;
    } else if (!accepted) {
      Swal.fire({
        icon: "error",
        title: "Oops..",
        text: "Please Accept Our Terms and Conditions!!",
      });

      return;
    }

    //create user
    createUser(email, password)
      .then((result) => {
        handleUpdateProfile(name, image).then(() => {
          const userInfo ={
            name,
            email
          }
        axiosPublic.post('/users', userInfo)
        .then(res=> {
          if(res.data.insertedId){
            Swal.fire({
              icon: "success",
              title: "Congrats!!!",
              text: "User Created Successfully",
            });
            //navigate after register
            navigate(from, { replace: true });
          }
        })

          
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error?.message}`,
        });
      });
  };
 
  return (
    <div className="  lg:flex max-w-screen-xl mx-auto p-10">
        <HelmetTitle title={"Sign Up"}></HelmetTitle>
      <div className="flex-1 ">{/* lottifiles */}</div>

      <div className=" flex-1 justify-center lg:w-1/2 md:w-3/4 my-10 mx-auto bg-[#FFFFFF] shadow-xl p-5">
        <div className=" ">
          <h2 className="text-2xl text-center font-bold mb-10">
            {" "}
            Register your account
          </h2>
          <p className="border-b-2  mx-10"></p>
        </div>
        <form onSubmit={handleRegister} className="card-body  ">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control relative ">
            <label className="label">
              <span className="label-text font-bold">Password</span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="password"
              className="input input-bordered  "
              required
            />
            <span
              className=" flex mt-12 mr-2 right-0 justify-end  text-2xl absolute  "
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <BiHide></BiHide> : <BiShowAlt></BiShowAlt>}
            </span>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Photo Url</span>
            </label>
            <input
              type="text"
              name="image"
              placeholder="Enter your photo url"
              className="input input-bordered"
            />
          </div>
          <div className="flex gap-2 text-sm mt-5 text-[#706F6F]">
            <p>
              <input className="mb-4" type="checkbox" name="terms" id="terms" />
              <label htmlFor="terms" className="ml-3">
                Accept our{" "}
                <a className="border-b " href="www.google.com">
                  Terms and Conditions
                </a>
              </label>
            </p>
          </div>
          <div className="form-control mt-6">
            <button className="btn font-bold  bg-[#403F3F] text-white hover:bg-[#D5204A]">
              Register
            </button>
          </div>
        </form>
        <p className="text-center font-medium pb-8">
          Already Have An Account ?
          <span className="text-[#3839AF] font-bold">
            <Link to="/login">Login</Link>
          </span>
        </p>
       {/* Social login */}
       <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Register;
