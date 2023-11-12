import img from '../../../assets/home/chef-service.jpg'

const ChefServiceSection = () => {
    return (
        <div className="hero h-[576px] mb-10" style={{backgroundImage: `url(${img})`}}>
        
        <div className="md:w-[1096px] w-2/3 h-[333px] text-center text-black bg-white">
         <div className='flex justify-center items-center '> 
         <div className="max-w-xl mx-auto mt-10 p-4  ">
            <h1 className="mb-5 md:text-5xl text-2xl ">Bistro Boss</h1>
            <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
           
          </div>
         </div>
        </div>
      </div>
       
    );
};

export default ChefServiceSection;