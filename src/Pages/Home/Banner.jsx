// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper md:h-[500px]"
      >
        <SwiperSlide className="relative flex justify-center items-center text-center">
          <div className='md:w-[1100px] md:h-[500px] mx-auto rounded-2xl overflow-hidden'>

          <div className="md:w-[1100px] md:h-[500px] mx-auto rounded-2xl absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
    
            
            <img className='absolute inset-0 md:w-[1100px] md:h-[500px] mx-auto rounded-2xl object-cover ' src="https://www.shutterstock.com/shutterstock/photos/2442962431/display_1500/stock-photo-check-list-concept-businessman-tick-off-questionnaire-survey-test-checklist-business-question-2442962431.jpg" alt="" />
          </div>


          <div className='relative -translate-y-32 md:-translate-y-[350px] mx-auto flex flex-col items-center text-center bg-white/60 py-8 rounded-3xl px-10 lg:w-[750px] text-black/70'>
            <h2 className=' text-lg md:text-4xl font-bold mb-2'>Welcome to Our Survey Platform
            </h2>
            <p className=' md:text-xl font-medium'>Create surveys with ease using our user-friendly tools designed for professionals and beginners alike.
            </p>
            <button className='btn w-[150px] bg-transparent mt-4  font-semibold'>VIEW MORE</button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative flex justify-center items-center text-center">
          <div className='md:w-[1100px] md:h-[500px] mx-auto rounded-2xl overflow-hidden'>

          <div className="md:w-[1100px] md:h-[500px] mx-auto rounded-2xl absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
    
            
            <img className='absolute inset-0 md:w-[1100px] md:h-[500px] mx-auto rounded-2xl object-cover ' src="https://www.shutterstock.com/shutterstock/photos/2442962431/display_1500/stock-photo-check-list-concept-businessman-tick-off-questionnaire-survey-test-checklist-business-question-2442962431.jpg" alt="" />
          </div>


          <div className='relative -translate-y-32 md:-translate-y-[350px] mx-auto flex flex-col items-center text-center bg-white/60 py-8 rounded-3xl px-10 lg:w-[750px] text-black/70'>
            <h2 className=' text-lg md:text-4xl font-bold mb-2'>Real-Time Data & Analytics
            </h2>
            <p className=' md:text-xl font-medium'>Get real-time insights with our powerful analytics tools, allowing you to make data-driven decisions.
            </p>
            <button className='btn w-[150px] bg-transparent mt-4  font-semibold'>VIEW MORE</button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;