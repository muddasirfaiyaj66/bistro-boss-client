import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import cardImage from "../../../assets/home/slide1.jpg";

const HomeCard = () => {
  return (
   <div>
    <div className="mt-[100px]">
    <SectionTitle subHeading={"Should Try"} heading={'CHEF RECOMMENDS'}></SectionTitle>
    </div>
     <div className="grid md:grid-cols-3 gap-10 mb-8">
      {/* cart 1  */}
      <div className="card w-[424px] h-[541px] card-compact  bg-base-100 shadow-xl">
        <figure>
          <img
            src={cardImage}
            className="h-full w-full object-cover"
            alt="Card"
          />
        </figure>
        <div className="card-body">
          <h2 className=" text-center text-2xl font-medium">Caeser Salad</h2>
          <p className="text-center px-4">
            Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
          </p>
          <div className="card-actions justify-center">
            <button className="btn bg-[#E8E8E8] border-b-[#BB8506] border-b-2  text-[#BB8506]">
              add to cart
            </button>
          </div>
        </div>
      </div>
      {/* end of cart1 */}

      {/* cart 2 */}
      <div className="card w-[424px] h-[541px] card-compact  bg-base-100 shadow-xl">
        <figure>
          <img
            src={cardImage}
            className="h-full w-full object-cover"
            alt="Card"
          />
        </figure>
        <div className="card-body">
          <h2 className=" text-center text-2xl font-medium">Caeser Salad</h2>
          <p className="text-center px-4">
            Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
          </p>
          <div className="card-actions justify-center">
            <button className="btn bg-[#1F2937]  text-[#BB8506]">
              add to cart
            </button>
          </div>
        </div>
      </div>
      
      {/* End of cart 2  */}
      {/* cart 3 */}
      <div className="card w-[424px] h-[541px] card-compact  bg-base-100 shadow-xl">
        <figure>
          <img
            src={cardImage}
            className="h-full w-full object-cover"
            alt="Card"
          />
        </figure>
        <div className="card-body">
          <h2 className=" text-center text-2xl font-medium">Caeser Salad</h2>
          <p className="text-center px-4">
            Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
          </p>
          <div className="card-actions justify-center">
            <button className="btn bg-[#E8E8E8] border-b-[#BB8506] border-b-2  text-[#BB8506]">
              add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
   </div>
  );
};

export default HomeCard;
