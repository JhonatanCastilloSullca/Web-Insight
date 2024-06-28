import { useContext } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './index.css';
import { GeneralContext } from '../../context/general';
import { useTranslation } from 'react-i18next';
import { MdDiscount, MdOutlineSecurity } from 'react-icons/md';
import { BiSolidUserVoice } from 'react-icons/bi';
import { GiFlyingFlag } from 'react-icons/gi';

function About() {
    const { t } = useTranslation();

    const { general } = useContext(GeneralContext);
    const GeneralData = general.nosotros;


    return (
        <div className="ftco-section ftco-about ftco-no-pt img mb-2 h-100">
            <Container>
                <Row className="d-flex">
                    <Col md={12} className="about-intro">
                        <Row>
                            <Col md={6} className="d-flex align-items-stretch">
                                <div className="img d-flex w-100 align-items-center justify-content-center img-nosotros" style={{ backgroundImage: `url('${GeneralData.image_secundaria}')` }}></div>
                            </Col>
                            <Col md={6} className="d-flex flex-column align-items-stretch pt-4">
                                <h6 className="section-title text-primary text-uppercase">Nos presentamos</h6>
                                <div className="info-nosotros-terms">
                                    <div className="incluye-tours" dangerouslySetInnerHTML={{ __html: GeneralData.descripcion }}></div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default About;
