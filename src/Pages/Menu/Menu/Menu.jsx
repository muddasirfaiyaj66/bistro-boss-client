import HelmetTitle from "../../../Components/Helmet/HelmetTitle";
import Cover from "../../Shared/Cover/Cover";
import menuImg from '../../../assets/menu/menu-bg.jpg'
import desertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import useMenu from "../../../Hooks/useMenu";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";


const Menu = () => {
    const [menu] =  useMenu()
    const desserts = menu.filter((item) => item.category === "dessert");
    const pizza = menu.filter((item) => item.category === "pizza");
    const salad = menu.filter((item) => item.category === "salad");
    const soup = menu.filter((item) => item.category === "soup");
    const offered = menu.filter((item) => item.category === "offered");
    return (
        <div>
            <HelmetTitle title={'Menu'}></HelmetTitle>
            {/* Main cover */}
            <Cover img={menuImg} title={'OUR MENU'}></Cover>
            <SectionTitle
        subHeading={"Don't miss"}
        heading={"TODAY'S OFFER"}
      ></SectionTitle>
      {/* offered */}
          <MenuCategory items={offered}></MenuCategory> 
          {/* desert items */}
          <MenuCategory 
          items={desserts}
          coverImg={desertImg}
          title={"Desert"}
          btn={'ORDER YOUR FAVOURITE FOOD'}
          ></MenuCategory>

          {/* pizza  */}
          <MenuCategory 
          items={pizza}
          coverImg={pizzaImg}
          title={"PIZZA"}
          btn={'ORDER YOUR FAVOURITE FOOD'}
          ></MenuCategory>

          {/* Salads  */}
          <MenuCategory 
          items={salad}
          coverImg={saladImg}
          title={"SALAD"}
          btn={'ORDER YOUR FAVOURITE FOOD'}
          ></MenuCategory>

          {/* Soup */}
          <MenuCategory 
          items={soup}
          coverImg={soupImg}
          title={"SOUP"}
          btn={'ORDER YOUR FAVOURITE FOOD'}
          ></MenuCategory>

        </div>
    );
};

export default Menu;