import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

export const instance = axios.create({
    baseURL: 'http://localhost:5000',
    
  });

const useAxios = () => {
  const navigate = useNavigate();
  const {logOut} = useAuth()
  // request interceptor to add authorization header for every secure call to api

  instance.interceptors.request.use(function(config){
    const token= localStorage.getItem('access-token');
    config.headers.authorization = `Bearer ${token}`
    return config;
  },function (error) {
    // Do something with request error
    return Promise.reject(error);
  });
  //interceptor 401 and 403 status 
  axios.interceptors.response.use(function(response){
    return response;
  }, async (error)=>{
    const status = error.response.status;
    console.log(status);
    if(status === 401 || status=== 403){
      await logOut();
      navigate('/login')
    }
      return Promise.reject(error);
  }
  )
 
    return instance;
};

export default useAxios;