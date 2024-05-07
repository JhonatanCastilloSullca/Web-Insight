import { DotLoader } from 'react-spinners';
import { useFetch } from '../../Hook/useFetch';
import CardTours from '../../componentes/CardTours'
import './index.css'
import { Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
function getRandomTours(tours, count) {
    let shuffled = tours.slice();
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled.slice(0, count);
}
function Tours() {
    const { t } = useTranslation();
    const requestOptions = {
        method: 'POST',
        token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiNmJjZWFhNWFlYWRkZTQyNDY3ZDZkYmJmMTVlMDhkMmVjMjZkZGM4Yjc5ZDZlZWM5NGIwODliOWRlMDUzNTdlMmE5YWUyOTc4ZjVhYzM5MTQiLCJpYXQiOjE2OTEwMDUwMDMuMjI5NzQzLCJuYmYiOjE2OTEwMDUwMDMuMjI5NzQ2LCJleHAiOjE3MjI2Mjc0MDMuMTA4MzU0LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.VPsULN8PnrW5EzFxiYlyn5R8ML4w0le-FvZFf1IxMOj2o2NVMUg-EERqJdKV3YWn2NquVgW8-SOPkmCtWJ4kfA_UZdaJ2JUkm0qo39cSNLt2AylXP8s4_pBK6cVBI8xo98fTkcoXgj-hDk6B04t4S2wIu7ddxSfgVdcWbVorN4Woac4i40d3xf6Iu-DnOfs6m5RKGDpOrzExQDrIn6A5_efpcNf1-I3rGgf00aAar2vKtdtZjFAzcVpDKMLm36Q-A0Yl54uEuC_e2RI2nsRhjtK7P0CwSPXzYyz29lU_k47WWJp4nVb0prt_-D5OHHk81LkFZqTiuiw5AB88_l3q65PG20oo8HSTW2c3hV1XPFHwhdVsjLncFX3TWhHUyHAIN48qBOiXl9JVmfeUj6t6uTurjRnaH-kykSke2dUPE77gCiMsLDUYA1dMD8EU42Y3F1tLWs4_CoXiwpjR2TGdjACY4FBHPwOAyrBpLIUKypeBcx3xrWcU2uZS7iTtQS_C2uhGyeMy0xSeBr0S0GICoJmiHmRUMc9gEHzlv40ObZpncXmw7VX1Txc5-DS6Y-GgjKjIPmmVQOWSJbjU7OqMtSaGyjmOTtECwgtlmFpfwEi0_g8L8T2OzgZVYOOROkzxOYnuCB1NLfj2N-NFcZ1cXUvB915l8C-v5ZD9Uulmxmsi',
        body: {
            language_id: 1
        }
    };
    const { data, loading, error } = useFetch("http://192.168.1.9/api/tours", requestOptions);
    const ToursData = data;
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
    if (!ToursData) return <div>{t("buttons.no-se-encontraron")}</div>;
    return (
        <>
            <div className="ftco-section">
                <div className="container">
                    <div className="row justify-content-center pb-4">
                        <div className="col-md-12 heading-section text-center ">
                            <span className="subheading">{t("tours.destinos")}</span>
                            <h2 className="mb-4">{t("tours.nuestros-tours")}</h2>
                        </div>
                    </div>
                    <div className="row">
                        <CardTours tours={getRandomTours(ToursData, 3)} />
                        <Col >
                            <p className='align-items-center justify-content-center d-flex'>
                                <NavLink to={`/tours`} className='btn btn-primary py-3 px-4'>
                                    {t("tours.revisa-nuestros-tours")}
                                </NavLink>
                            </p>
                        </Col>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Tours
