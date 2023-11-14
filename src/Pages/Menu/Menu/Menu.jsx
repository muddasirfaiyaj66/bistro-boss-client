import HelmetTitle from "../../../Components/Helmet/HelmetTitle";
import Cover from "../../Shared/Cover/Cover";
import menuImg from '../../../assets/menu/menu-bg.jpg'


const Menu = () => {
    return (
        <div>
            <HelmetTitle title={'Menu'}></HelmetTitle>
            <Cover img={menuImg} title={'OUR MENU'}></Cover>
           
        </div>
    );
};

export default Menu;