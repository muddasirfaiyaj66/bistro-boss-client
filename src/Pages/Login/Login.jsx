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
import SocialLogin from "../../Components/SocialLogin/SocialLogin";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const captchaRef = useRef(null);
  const [disabled, setDisabled]= useState(true);
  const {login}= useAuth()
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

       <SocialLogin></SocialLogin>
      </div>
      <div className="flex-1 "></div>
    </div>
  );
};

export default Login;
