import './index.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { FaTripadvisor } from 'react-icons/fa';
import { FaCircleDot } from 'react-icons/fa6';
import { useTranslation } from 'react-i18next';
import { useContext } from 'react';
import { GeneralContext } from '../../context/general';

function Testimonios() {
    const { general } = useContext(GeneralContext);
    const GeneralData = general.tripadvisor;
    const GeneralDataNosotros = general.nosotros;
    const { t } = useTranslation();
    return (
        <>

            <div className="ftco-section testimony-section bg-bottom" style={{ backgroundImage: `url('${GeneralDataNosotros.image_secundaria}')` }}>
                <div className="overlay"></div>
                <div className="container">
                    <div className="row justify-content-center pb-4">
                        <div className="col-md-7 text-center heading-section heading-section-white ">
                            <span className="subheading">{t("testimonios.testimonios")}</span>
                            <h2 className="mb-4">{t("testimonios.comentario-turisticos")}</h2>
                        </div>
                    </div>
                    <div className="row ">
                        <Swiper
                            modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
                            spaceBetween={50}
                            slidesPerView={1}
                            grabCursor={true}
                            autoplay={{
                                delay: 105000,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            breakpoints={{
                                640: {
                                    slidesPerView: 3,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 40,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 50,
                                },
                            }}
                            className="mySwiperDestiny"
                        >
                            {GeneralData.map((testimonios) => (
                                <SwiperSlide key={testimonios.id}>
                                    <div className="card mb-3" >
                                        <div className="card-header d-flex justify-content-between align-items-center border-0">
                                            <div className="d-flex align-items-center">
                                                <img
                                                    src={testimonios.url}
                                                    alt="User"
                                                    className="rounded-circle me-3 img-testimonio "
                                                />
                                                <div>
                                                    <h6 className="mb-0">{testimonios.name}</h6>
                                                    <span className="text-muted">{testimonios.fecha}</span>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center border-none ti-stars">
                                                <FaTripadvisor />
                                            </div>
                                        </div>
                                        <div className="card-body pt-0 testimonios-lines">
                                            <span className="ti-stars p-0">
                                                <FaCircleDot />
                                                <FaCircleDot />
                                                <FaCircleDot />
                                                <FaCircleDot />
                                                <FaCircleDot />
                                            </span>
                                            <p className="card-text clamp-4">
                                                {testimonios.description}
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>

                            ))}

                        </Swiper>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonios
