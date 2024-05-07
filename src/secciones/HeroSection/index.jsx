
import './index.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation } from 'swiper/modules';
import { useFetch } from '../../Hook/useFetch';
import { GeneralContext } from '../../context/general';
import { useContext } from 'react';
function HeroSection() {


    const { general: GeneralData } = useContext(GeneralContext);
    const cabeceraTipo = GeneralData.cabecera[1].tipo;
    return (
        <>
            <div className='w-100 relative'>
                {cabeceraTipo == 0 ? (
                    <video src="./VertigoVideo.mp4" autoPlay loop muted className='video-home home-size'></video>
                ) : (
                    <Swiper
                        navigation={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay, Navigation]}
                        className="mySwiper home-size"
                    >
                        {GeneralData.cabecera[1].images.map((images, index) => (
                            <SwiperSlide key={index}>
                                <img src="https://swiperjs.com/demos/images/nature-1.jpg" className='slider-image-home' />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}
            </div>
        </>
    )
}
export default HeroSection

