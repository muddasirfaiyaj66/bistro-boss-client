

const FoodCard = ({item}) => {
  const {image,price,recipe, name }= item;
    return (
        <div className="card md:w-[424px] md:h-[541px] card-compact  bg-base-100 shadow-xl">
        <figure>
          <img
            src={image}
            className="h-full w-full object-cover"
            alt="Card"
          />
        </figure>
        <p className="absolute bg-slate-950 right-0 text-white mr-4 mt-4 px-4 rounded-sm">${price}</p>
        <div className="card-body">
          <h2 className=" text-center text-2xl font-medium">{name}</h2>
          <p className="text-center px-4">
           {recipe}
          </p>
          <div className="card-actions justify-center">
            <button className="btn bg-[#E8E8E8] border-b-[#BB8506] border-b-2  text-[#BB8506]">
              add to cart
            </button>
          </div>
        </div>
      </div>
    );
};

export default FoodCard;