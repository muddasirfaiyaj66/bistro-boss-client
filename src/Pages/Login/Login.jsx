import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import {  useEffect, useRef, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import HelmetTitle from "../../Components/Helmet/HelmetTitle";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const captchaRef = useRef(null);
  const [disabled, setDisabled]= useState(true);
  const {login,signInWithGoogle}= useAuth()
  const from = location.state?.from?.pathname || '/';

  useEffect(()=>{
    loadCaptchaEnginge(6); 
  },[])

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);

    const form = new FormData(e.currentTarget);

    const email = form.get("email");
    const password = form.get("password");

        //sign in
        login(email, password)
          .then((result) => {
            console.log(result.user);
            Swal.fire({
              icon: "success",
              title: "Congrats!!!",
              text: "Successfully Login",
            });
            //navigate after log in
            navigate(from, { replace: true });
          })
          .catch((error) => {
            Swal.fire({
              icon: "error",
              title: "Error!!!",
              text: `${error.message}`,
            });
          });
  };
  const handleValidateCaptcha = ()=>{
    const user_captcha_value = captchaRef.current.value;
    if(validateCaptcha(user_captcha_value)===true ){
        setDisabled(false)

    }
    else {
        
        setDisabled(true);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: 'Captcha Does Not Match',
        });
    }

  }

    const handleSignInWithGoogle = () => {
      signInWithGoogle()
        .then((result) => {
          console.log(result.user);

          Swal.fire({
            icon: "success",
            title: "Congrats!!!",
            text: "Successfully Login",
          });
          //navigate after log in
        navigate(from, {replace:true})
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `${error.message}`,
          });
        });
    };

  return (
    <div className=" lg:flex max-w-screen-xl mx-auto p-10">
        <HelmetTitle title={"Login"}></HelmetTitle>
      <div className="flex-1 justify-center lg:w-1/2 md:w-3/4 my-10 mx-auto bg-[#FFFFFF] shadow-xl p-5">
        <div className=" ">
          <h2 className="text-2xl text-center font-bold mb-10">
            Login your account
          </h2>
          <p className="border-b-2  mx-10"></p>
        </div>
        <form onSubmit={handleLogin} className="card-body  ">
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
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
           
          </div>
          <div className="form-control">
            <label className="label">
             <LoadCanvasTemplate></LoadCanvasTemplate>
            </label>
            <input
              type="text"
              name="captcha"
              ref={captchaRef}
              onBlur={handleValidateCaptcha}
              placeholder="type the captcha above"
              
              className="input input-bordered"
              required
            />
           
          </div>
          <div className="form-control mt-6">
            <button disabled={disabled} className="btn font-bold  bg-[#403F3F] text-white hover:bg-[#0CAFCD]">
              Login
            </button>
          </div>
        </form>
        <p className="text-center font-medium pb-8">
          Do not Have An Account ?
          <span className="text-[#3839AF]">
            <Link to="/register">Register</Link>
          </span>
        </p>

        <div className="my-5 flex justify-center">
          <button
            onClick={handleSignInWithGoogle}
            type="button"
            className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
          >
            <svg
              className="w-4 h-4 mr-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 19"
            >
              <path
                fill-rule="evenodd"
                d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
                clip-rule="evenodd"
              />
            </svg>
            Sign in with Google
          </button>
        </div>
      </div>
      <div className="flex-1 "></div>
    </div>
  );
};

export default Login;
