import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxios from "./useAxios";


const useCart = () => {
  const axios = useAxios();
  const {user}= useAuth();
  const {data:cart, refetch}= useQuery({
    queryKey:["getCart", user?.email],
    queryFn: async ()=>{
        const res = await axios.get(`/carts?email=${user?.email}`)
        return res.data;
    }
  })
  return [cart, refetch]
};

export default useCart;