import './index.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useContext, useEffect, useState } from "react";
import { GeneralContext } from "../../context/general";
import CertificadoCarousel from "../../componentes/CertificadoCarousel";
import { useCart } from "../../Hook/useCart";
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { FaPhone } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { MdMarkEmailRead } from 'react-icons/md';
import { useTranslation } from 'react-i18next';



function ContactPage() {
    const { t } = useTranslation();


    const { clearCart } = useCart();
    useEffect(() => {
        clearCart();
    }, []);
    const { general } = useContext(GeneralContext);
    const GeneralData = general.nosotros;
    const cabeceraTipo = general.certificados[0];
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };

    return (
        <>
            <div className="hero-wrap js-mediumheight" style={{ backgroundImage: `url('${GeneralData.image_principal}')` }}>
                <div className="overlay-real"></div>
                <Container className="position-relative">
                    <Row className="js-mediumheight d-flex justify-content-center align-items-center">
                        <div className="principal-hero-title d-flex flex-column justify-content-center align-items-center">
                            <h1>{t("contacto.contactanos")}</h1>
                            <p className="principal-hero-text">{GeneralData.titulo}</p>
                        </div>
                    </Row>
                </Container>
            </div>
            <div className="ftco-section services-section descriptio-tour-container">
                <Container>
                    <Row className="d-flex justify-content-center contact-info gap-4">
                        <Col md={3} className="d-flex justify-content-center border-primary border rounded">
                            <div className="align-self-stretch box p-4 text-center">
                                <div className="icon-contact d-flex align-items-center justify-content-center">
                                    <FaLocationDot className='icon-fa' />
                                </div>
                                <h3 className="mb-2">{t("contacto.ubicacion-nuestro-local")}</h3>
                                <p>C. Plateros 394, Cusco, Perú</p>
                            </div>
                        </Col>
                        <Col md={3} className="d-flex justify-content-center border-primary border rounded">
                            <div className="align-self-stretch box p-4 text-center">
                                <div className="icon-contact d-flex align-items-center justify-content-center">
                                    <FaPhone className='icon-fa' />
                                </div>
                                <h3 className="mb-2">{t("contacto.numero-contacto")}</h3>
                                <p>+51 990 757 584</p>
                            </div>
                        </Col>
                        <Col md={3} className="d-flex justify-content-center border-primary border rounded">
                            <div className="align-self-stretch box p-4 text-center">
                                <div className="icon-contact d-flex align-items-center justify-content-center">
                                    <MdMarkEmailRead className='icon-fa' />
                                </div>
                                <h3 className="mb-2">{t("contacto.direaccion-email")}</h3>
                                <p>info@vertigotravelperu.com</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div >
            <div className="ftco-section services-section pt-4 descriptio-tour-container">
                <Container>
                    <Row>
                        <Col md={6}>
                            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                <Form.Group controlId="formNombre">
                                    <Form.Label>{t("formulario.nombre")}</Form.Label>
                                    <Form.Control type="text" placeholder="Nombre" required />
                                    <Form.Control.Feedback type="invalid">
                                        Por favor, ingresa tu nombre.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group controlId="formEmail">
                                    <Form.Label>{t("formulario.email")}</Form.Label>
                                    <Form.Control type="email" placeholder="Email" />
                                </Form.Group>
                                <Form.Group controlId="formCelular">
                                    <Form.Label>{t("formulario.celular")}</Form.Label>
                                    <Form.Control type="tel" placeholder="Celular" required />
                                    <Form.Control.Feedback type="invalid">
                                        Por favor, ingresa tu número de celular.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group controlId="formAsunto">
                                    <Form.Label>{t("formulario.asunto")}</Form.Label>
                                    <Form.Control type="text" placeholder="Asunto" required />
                                    <Form.Control.Feedback type="invalid">
                                        Por favor, ingresa el asunto.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group controlId="formMensaje">
                                    <Form.Label>{t("formulario.mensaje")}</Form.Label>
                                    <Form.Control as="textarea" rows={3} placeholder="Mensaje" />
                                </Form.Group>
                                <Button variant="primary" type="submit" className='mt-4'>
                                    {t("formulario.enviar-mensaje")}
                                </Button>
                            </Form>
                        </Col>
                        <Col md={6} className='d-flex align-items-center'>
                            <img src="https://media.istockphoto.com/id/903568822/photo/call-center-workers.jpg?s=612x612&w=0&k=20&c=wGoPEMHmgnB7zwGl0pUaWP1nl_S3dOhnFxTNkQQhtiI=" alt="Contacto" className='w-100 border rounded' />
                        </Col>
                    </Row>
                </Container>
            </div >
            <div className="ftco-section services-section pt-4 descriptio-tour-container">
                <Container className="text-center">
                    <Row className="mb-4">
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <p className="section-description">
                                {t("testimonios.mensaje-testimonio")}
                            </p>
                        </div>
                    </Row>
                    <Row>
                        <CertificadoCarousel general={cabeceraTipo} />
                    </Row>
                </Container>
            </div >
        </>
    )
}

export default ContactPage
