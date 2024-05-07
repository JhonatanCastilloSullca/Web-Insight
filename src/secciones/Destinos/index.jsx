import './index.css'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useFetch } from '../../Hook/useFetch';
import { NavLink } from 'react-router-dom';
import { DotLoader } from 'react-spinners';
import { useTranslation } from 'react-i18next';
function Destinos() {
    const { t } = useTranslation();
    const requestOptions = {
        method: 'POST',
        token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiNmJjZWFhNWFlYWRkZTQyNDY3ZDZkYmJmMTVlMDhkMmVjMjZkZGM4Yjc5ZDZlZWM5NGIwODliOWRlMDUzNTdlMmE5YWUyOTc4ZjVhYzM5MTQiLCJpYXQiOjE2OTEwMDUwMDMuMjI5NzQzLCJuYmYiOjE2OTEwMDUwMDMuMjI5NzQ2LCJleHAiOjE3MjI2Mjc0MDMuMTA4MzU0LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.VPsULN8PnrW5EzFxiYlyn5R8ML4w0le-FvZFf1IxMOj2o2NVMUg-EERqJdKV3YWn2NquVgW8-SOPkmCtWJ4kfA_UZdaJ2JUkm0qo39cSNLt2AylXP8s4_pBK6cVBI8xo98fTkcoXgj-hDk6B04t4S2wIu7ddxSfgVdcWbVorN4Woac4i40d3xf6Iu-DnOfs6m5RKGDpOrzExQDrIn6A5_efpcNf1-I3rGgf00aAar2vKtdtZjFAzcVpDKMLm36Q-A0Yl54uEuC_e2RI2nsRhjtK7P0CwSPXzYyz29lU_k47WWJp4nVb0prt_-D5OHHk81LkFZqTiuiw5AB88_l3q65PG20oo8HSTW2c3hV1XPFHwhdVsjLncFX3TWhHUyHAIN48qBOiXl9JVmfeUj6t6uTurjRnaH-kykSke2dUPE77gCiMsLDUYA1dMD8EU42Y3F1tLWs4_CoXiwpjR2TGdjACY4FBHPwOAyrBpLIUKypeBcx3xrWcU2uZS7iTtQS_C2uhGyeMy0xSeBr0S0GICoJmiHmRUMc9gEHzlv40ObZpncXmw7VX1Txc5-DS6Y-GgjKjIPmmVQOWSJbjU7OqMtSaGyjmOTtECwgtlmFpfwEi0_g8L8T2OzgZVYOOROkzxOYnuCB1NLfj2N-NFcZ1cXUvB915l8C-v5ZD9Uulmxmsi',
        body: {
            language_id: 1
        }
    };
    const { data, loading, error } = useFetch("http://192.168.1.9/api/ubicaciones", requestOptions);
    const GeneralData = data;
    if (loading) return <div className="mainloader">
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <DotLoader color="#28a745" loading={true} size={100} />
        </div>
    </div>;
    if (error) return <div className="mainloader">
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <DotLoader color="#ff0011" loading={true} size={100} />
        </div>
    </div>;
    if (!GeneralData) return <div>{t("buttons.no-se-encontraron")}</div>;
    return (
        <>
            <div className="ftco-section img ftco-select-destination" style={{ backgroundImage: "url('../../../src/assets/images/bg_3.jpg')" }}>
                <div className="container">
                    <div className="row justify-content-center pb-4">
                        <div className="col-md-12 heading-section text-center">
                            <span className="subheading">{t("destinos.nuestros-paquetes")}</span>
                            <h2 className="mb-4">{t("destinos.selecciona-tu-destino-favorito")}</h2>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row justify-content-center pb-4">
                        <div className="row">
                            <Swiper
                                modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
                                spaceBetween={50}
                                centeredSlides={true}
                                grabCursor={true}
                                autoplay={{
                                    delay: 1800,
                                    disableOnInteraction: false,
                                }}
                                pagination={{
                                    clickable: true,
                                }}
                                breakpoints={{
                                    640: {
                                        slidesPerView: 2,
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
                                {
                                    GeneralData.map((ubicacion) => (
                                        <SwiperSlide key={ubicacion.id}>
                                            <NavLink to={`/paquete/${ubicacion.slug}`}>
                                                <div className="item">
                                                    <div className="project-destination">
                                                        <div className="img" style={{ backgroundImage: `url(${ubicacion.image ? ubicacion.image.nombre : ''})` }}>
                                                            <div className="text">
                                                                <h3>{ubicacion.nombre}</h3>
                                                                <span>{ubicacion.tours_count} Tours</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </NavLink>
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Destinos
