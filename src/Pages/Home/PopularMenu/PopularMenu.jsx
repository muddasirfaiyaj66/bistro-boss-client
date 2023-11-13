import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const PopularMenu = () => {
    const [menu, setMenu] = useState([]);
    useEffect(()=>{
        fetch('menu.json')
        .then(res=> res.json())
        .then(data => {
            const popularItems = data.filter(item=> item.category === 'popular');
            setMenu(popularItems)
            
        })
    },[])
    return (
        <section>
            <SectionTitle subHeading={'Check it out'} heading={'FROM OUR MENU'}></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10 my-10 ">
                {
                    menu.map(item=> <MenuItem key={item._id} item={item}></MenuItem> )
                }
            </div>
         <div className="flex justify-center items-center my-8">
         <button className="btn text-center btn-outline border-0  border-b-black border-b-4">View Full  Menu</button>
         </div>
        </section>
    );
}; 

export default PopularMenu;