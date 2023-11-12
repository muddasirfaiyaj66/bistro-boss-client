import Banner from "../Banner/Banner";
import CallUs from "../CallUs/CallUs";
import Category from "../Category/Category";
import ChefServiceSection from "../ChefServiceSection/ChefServiceSection";
import HomeCard from "../HomeCard/HomeCard";
import PopularMenu from "../PopularMenu/PopularMenu";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
          
            <Category></Category>

            <ChefServiceSection></ChefServiceSection>
            <PopularMenu></PopularMenu>

            <CallUs></CallUs>
            <HomeCard></HomeCard>
           
        </div>
    );
};

export default Home;