import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useAdmin = () => {
    const axiosPublic = useAxiosPublic()
    const {user}=useAuth();
    const {data: isAdmin, isPending:isAdminLoading}= useQuery({
        queryKey: [user?.email,'admin'],
        queryFn: async () =>{
        const res = await axiosPublic.get(`/users/admin/${user.email}`)
        return res.data?.admin
        }
    })
    return [isAdmin,isAdminLoading]
};

export default useAdmin;