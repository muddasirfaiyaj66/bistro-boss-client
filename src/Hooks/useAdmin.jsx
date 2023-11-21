import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxios from "./useAxios";

const useAdmin = () => {
    const axios = useAxios()
    const {user}=useAuth();
    const {data: isAdmin, isPending:isAdminLoading}= useQuery({
        queryKey: [user?.email,'admin'],
        queryFn: async () =>{
        const res = await axios.get(`/users/admin/${user.email}`)
        return res.data?.admin
        }
    })
    return [isAdmin,isAdminLoading]
};

export default useAdmin;