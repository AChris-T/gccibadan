import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


import { EffectCoverflow, Pagination } from 'swiper/modules';


const GallerySlider = () => {
    const [imageUrls, setImageUrls] = useState([]);

    // Dynamically import all images from the local folder using Vite's import.meta.glob
    const images = import.meta.glob('../assets/gallery/*.{png,jpg,jpeg,svg}');
    
    useEffect(() => {
      const loadImages = async () => {
        const imagePromises = Object.keys(images).map((path) =>
          images[path]().then((mod) => mod.default)
        );
        const urls = await Promise.all(imagePromises);
        setImageUrls(urls);
      };
      loadImages();
    }, []);
  
  return (
    <div>
    <h6 style={{fontFamily:"Lobster Two, sans-serif"}}  className="text-[#ec3538] text-center font-bold">Our pictures</h6>
    <h3 className="w-full flex justify-center text-[#171730]  font-semibold text-[32px]  leading-10 text-center">Our pictures speaks alot about us</h3>

       <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper w-[100%] pt-[50px] pb-[50px]"
      >
     {imageUrls.map((src, index) => (
        <SwiperSlide key={index} className={index === 0 ? 'w-[300px] h-[300px]' : ''}>
          <img src={src} alt={`Slide ${index + 1}`} />
        </SwiperSlide>
      ))}
       
      </Swiper>
    </div>
  )
}

export default GallerySlider
