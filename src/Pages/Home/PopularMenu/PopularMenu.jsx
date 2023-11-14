
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../Hooks/useMenu";


const PopularMenu = () => {
    const [menu]= useMenu();
    const popular = menu.filter(item=> item.category === 'popular')
 
    return (
        <section>
            <SectionTitle subHeading={'Check it out'} heading={'FROM OUR MENU'}></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10 my-10 ">
                {
                    popular.map(item=> <MenuItem key={item._id} item={item}></MenuItem> )
                }
            </div>
         <div className="flex justify-center items-center my-8">
         <button className="btn text-center btn-outline border-0  border-b-black border-b-4">View Full  Menu</button>
         </div>
        </section>
    );
}; 

export default PopularMenu;