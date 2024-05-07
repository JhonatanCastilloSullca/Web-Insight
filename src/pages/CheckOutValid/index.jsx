import { Card, Container, Row } from "react-bootstrap"
import './index.css'
import { useLocation } from "react-router-dom"
import { useFetch } from "../../Hook/useFetch"
import { useContext, useEffect } from "react"
import { GeneralContext } from "../../context/general"
import CertificadoCarousel from "../../componentes/CertificadoCarousel"
import { useCart } from "../../Hook/useCart";
import { DotLoader } from "react-spinners";


function CheckOutValid() {

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('id');
    const { clearCart } = useCart();
    useEffect(() => {
        clearCart();
    }, []);
    const { general } = useContext(GeneralContext);
    const GeneralData = general.nosotros;
    const cabeceraTipo = general.certificados[0];


    const requestOptions = {
        method: 'POST',
        token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiNmJjZWFhNWFlYWRkZTQyNDY3ZDZkYmJmMTVlMDhkMmVjMjZkZGM4Yjc5ZDZlZWM5NGIwODliOWRlMDUzNTdlMmE5YWUyOTc4ZjVhYzM5MTQiLCJpYXQiOjE2OTEwMDUwMDMuMjI5NzQzLCJuYmYiOjE2OTEwMDUwMDMuMjI5NzQ2LCJleHAiOjE3MjI2Mjc0MDMuMTA4MzU0LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.VPsULN8PnrW5EzFxiYlyn5R8ML4w0le-FvZFf1IxMOj2o2NVMUg-EERqJdKV3YWn2NquVgW8-SOPkmCtWJ4kfA_UZdaJ2JUkm0qo39cSNLt2AylXP8s4_pBK6cVBI8xo98fTkcoXgj-hDk6B04t4S2wIu7ddxSfgVdcWbVorN4Woac4i40d3xf6Iu-DnOfs6m5RKGDpOrzExQDrIn6A5_efpcNf1-I3rGgf00aAar2vKtdtZjFAzcVpDKMLm36Q-A0Yl54uEuC_e2RI2nsRhjtK7P0CwSPXzYyz29lU_k47WWJp4nVb0prt_-D5OHHk81LkFZqTiuiw5AB88_l3q65PG20oo8HSTW2c3hV1XPFHwhdVsjLncFX3TWhHUyHAIN48qBOiXl9JVmfeUj6t6uTurjRnaH-kykSke2dUPE77gCiMsLDUYA1dMD8EU42Y3F1tLWs4_CoXiwpjR2TGdjACY4FBHPwOAyrBpLIUKypeBcx3xrWcU2uZS7iTtQS_C2uhGyeMy0xSeBr0S0GICoJmiHmRUMc9gEHzlv40ObZpncXmw7VX1Txc5-DS6Y-GgjKjIPmmVQOWSJbjU7OqMtSaGyjmOTtECwgtlmFpfwEi0_g8L8T2OzgZVYOOROkzxOYnuCB1NLfj2N-NFcZ1cXUvB915l8C-v5ZD9Uulmxmsi',
        body: JSON.stringify({
        })
    };
    const { data, loading, error } = useFetch(`http://192.168.1.9/api/confirmar-pago?id=${id}`, requestOptions);

    const blogs = data;
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
    if (!blogs) return <div>No se encontraron tours</div>;
    return (
        <>
            <div className="hero-wrap js-mediumheight" style={{ backgroundImage: `url('${GeneralData.image_principal}')` }}>
                <div className="overlay-real"></div>
                <Container className="position-relative">
                    <Row className="js-mediumheight d-flex justify-content-center align-items-center">
                        <div className="principal-hero-title d-flex flex-column justify-content-center align-items-center">
                            <h1>Realiza tu reserva</h1>
                            <p className="principal-hero-text">{GeneralData.titulo}</p>
                        </div>
                    </Row>
                </Container>
            </div>
            <div className="ftco-section services-section pt-4 descriptio-tour-container">
                <Container className="text-center">
                    <div className="login-box Booking-box">
                        <Card className="m-2">
                            <div className="d-grid justify-content-around w-100 m-auto p-2">
                                <h1>Tu reserva ha sido aceptada con exito</h1>
                                <h4>Un agente de Vertigo travel se pondra en contacto con usted</h4>
                                <Card className="mt-4">
                                    <Card.Body>
                                        <h5 className="card-title">Recibo de Pago</h5>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <p><strong>Número de Pedido:</strong> {id}</p>
                                                <p><strong>Fecha y Hora:</strong> {data.fecha}</p>
                                                <p><strong>Tarjeta:</strong> {data.tarjeta}</p>
                                            </div>
                                            <div className="col-md-12">
                                                <p><strong>Importe Pagado:</strong> S/. {data.monto}</p>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Card>
                    </div>
                </Container>
            </div >
            <div className="ftco-section services-section pt-4 descriptio-tour-container">
                <Container className="text-center">
                    <Row className="mb-4">
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <p className="section-description">
                                Somos una empresa cusqueña dinámica que genera experiencias turísticas de calidad en turismo cultural, de naturaleza, de aventura y comunitario. Con más de 10 años diseñando productos turísticos en el sur del Perú, ofrecemos una oferta diversificada y contribuimos a la preservación cultural y natural de nuestro país. Además capacitamos constantemente a nuestro personal y aliados estratégicos en nuestros diferentes destinos, lo que nos permite garantizar altos estándares de calidad.
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

export default CheckOutValid
