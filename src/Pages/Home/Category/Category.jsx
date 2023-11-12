import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import side1 from '../../../assets/home/slide1.jpg'
import side2 from '../../../assets/home/slide2.jpg'
import side3 from '../../../assets/home/slide3.jpg'
import side4 from '../../../assets/home/slide4.jpg'
import side5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const Category = () => {
    return (
        <section>
          <SectionTitle
          heading={'ORDER ONLINE'} subHeading={'From 11:00am to 10:00pm'}
          >

          </SectionTitle>
          <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide><img src={side1} alt="" />
        <h1 className='text-4xl uppercase text-white -mt-20 text-center font-medium'> salads</h1>
        </SwiperSlide>
        <SwiperSlide><img src={side2} alt="" />
        <h1 className='text-4xl uppercase text-white -mt-20 text-center font-medium'>pizzas </h1>
        </SwiperSlide>
        <SwiperSlide><img src={side3} alt="" />
        <h1 className='text-4xl uppercase text-white -mt-20 text-center font-medium'> Soups</h1>
        </SwiperSlide>
        <SwiperSlide><img src={side4} alt="" />
        <h1 className='text-4xl uppercase text-white -mt-20 text-center font-medium'> desserts</h1>
        </SwiperSlide>
        <SwiperSlide><img src={side5} alt="" />
        <h1 className='text-4xl uppercase text-white -mt-20 text-center font-medium'> salads</h1>
        </SwiperSlide>
        
      </Swiper>
        </section>
    )
}
export default Category;