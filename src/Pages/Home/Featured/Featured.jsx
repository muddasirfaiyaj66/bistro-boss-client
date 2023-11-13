import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import FeaturedImg from "../../../assets/home/featured.jpg";
import './Featured.css'
const Featured = () => {
  return (
    <div className="featured-item bg-fixed  my-20 p-5 text-white">
      <div className="pt-10">
      <SectionTitle
        heading={"FROM OUR MENU"}
        subHeading={"Check it out"}
      ></SectionTitle>
      </div>
      <div className="md:flex justify-center items-center gap-5 md:py-20 md:px-36">
        <div>
          <img src={FeaturedImg} alt="" />
        </div>
        <div className="lg:ml-8 space-y-2">
          <p>March 20, 2023</p>
          <p className="uppercase font-xl font-semibold">WHERE CAN I GET SOME?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
          <button className="btn btn-outline border-0 my-2 pb-5 text-white border-b-white border-b-4">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
