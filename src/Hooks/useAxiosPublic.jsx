import axios from "axios";

const instance = axios.create({
    baseURL: 'https://bistro-boss-server-seven-nu.vercel.app',
    
  });

const useAxiosPublic = () => {
    return instance;
};

export default useAxiosPublic;