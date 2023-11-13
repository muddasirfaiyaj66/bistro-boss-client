import Banner from "../Banner/Banner";
import CallUs from "../CallUs/CallUs";
import Category from "../Category/Category";
import ChefServiceSection from "../ChefServiceSection/ChefServiceSection";
import Featured from "../Featured/Featured";
import HomeCard from "../HomeCard/HomeCard";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
          
            <Category></Category>

            <ChefServiceSection></ChefServiceSection>
            <PopularMenu></PopularMenu>

            <CallUs></CallUs>
            <HomeCard></HomeCard>
            <Featured></Featured>
            <Testimonials></Testimonials>
           
        </div>
    );
};

export default Home;