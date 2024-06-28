import './index.css'
import { NavLink } from 'react-router-dom';
import { FaFacebook, FaTripadvisor } from 'react-icons/fa';
import { Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { FaEnvelope, FaLocationDot, FaPhone } from 'react-icons/fa6';

function Footer() {
    const { t } = useTranslation();
    return (
        <>
            <div className="footer-prueba">
            </div>
            <div className="vertigo-trekking-quote"></div>
            <footer className="ftco-footer bg-bottom ftco-no-pt pb-0">
                <div className="container">
                    <div className="row">
                        <div className="col-md pt-5">
                            <div className="ftco-footer-widget pt-md-5 mb-4">
                                <h2 className="ftco-heading-2">Sobre nosotros</h2>
                                <p>Con los más altos estándares de calidad, ofrecemos una respuesta cálida, rápida y precisa a sus requerimientos para garantizar el éxito de sus programas.
                                </p>
                                <ul className="ftco-footer-social list-unstyled float-md-left float-lft">
                                    <li ><a href="https://www.facebook.com/cusco.insight/" className='d-flex justify-content-center align-items-center' ><FaFacebook /></a></li>
                                    <li ><a href="https://www.tripadvisor.com/Attraction_Review-g294314-d17478297-Reviews-Cuzco_Travel-Cusco_Cusco_Region.html" className='d-flex justify-content-center align-items-center' ><FaTripadvisor /></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md pt-5 border-left">
                            <div className="ftco-footer-widget pt-md-5 mb-4 ml-md-5">
                                <h2 className="ftco-heading-2">Categoria de Tours</h2>
                                <ul className="list-unstyled">
                                    <li>
                                        <NavLink to='/' className="py-2 d-block">
                                            {t("header.home")}
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/' className="py-2 d-block">
                                            Tours
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/' className="py-2 d-block">
                                            {t("header.about")}
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/' className="py-2 d-block">
                                            {t("header.contact")}
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/' className="py-2 d-block">
                                            {t("header.cart")}
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md pt-5 border-left">
                            <div className="ftco-footer-widget pt-md-5 mb-4">
                                <h2 className="ftco-heading-2">Contactanos</h2>
                                <div className="block-23 mb-3">
                                    <ul>
                                        <li><FaLocationDot className='text-white me-2' /> <span className="text">Cusco, Perú</span></li>
                                        <li><FaPhone className='text-white me-2' /><span className="text">+51 980 693 523</span></li>
                                        <li><FaEnvelope className='text-white me-2' /><span className="text">info@cuscoinsight.com</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            <Row className='m-0 p-0 bg-dark'>
                <div className="col-md-12 text-center copy-text-footer">
                    <p>
                        Cusco Insight
                    </p>
                </div>
            </Row>
        </>
    )
}

export default Footer


