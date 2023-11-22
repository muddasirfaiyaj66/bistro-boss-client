

import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({items, title, coverImg, btn}) => {
    return (
        <div>
            <div>
            { title && <Cover img={coverImg} title={title}></Cover>}
            <div className="grid md:grid-cols-2 gap-10 my-10 ">
        {items?.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
            </div>
        <div className="flex text-center justify-center items-center my-8">
       <Link to={`/order/${title}`}>
       {btn && <button className="btn text-center btn-outline border-0  border-b-black border-b-4">
          {btn}
        </button>}
       </Link>
      </div>
      </div>
        </div>
    );
};

export default MenuCategory;