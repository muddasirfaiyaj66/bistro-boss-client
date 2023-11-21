import { useLocation, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";

const SocialLogin = () => {
    const axiosPublic = useAxiosPublic()
    const location = useLocation();
    const navigate = useNavigate();
    const {signInWithGoogle } = useAuth();
    const from = location.state?.from?.pathname || '/';
    const handleSignInWithGoogle = () => {
        signInWithGoogle()
          .then((result) => {
            console.log(result.user);
            const userInfo = {
              email: result?.user?.email,
              name: result?.user?.displayName
            }
            axiosPublic.post("/users", userInfo)
            .then(res=>{
              if(res?.data){
                console.log(res.data);
                Swal.fire({
                  icon: "success",
                  title: "Congrats!!!",
                  text: "Successfully Login",
                });
                
                //navigate after log in
              navigate(from, {replace:true})
              }
              })
              .catch((error) => {
                Swal.fire({
                  icon: "error",
                  title: "Oops...",
                  text: `${error.message}`,
                });
              })
      
            })
           
          
          
      };
    return (
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
    );
};

export default SocialLogin;