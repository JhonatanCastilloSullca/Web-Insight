import './index.css'
import serviciosData from '../../data/servicios.json'
import { FaBus, FaPersonHiking } from 'react-icons/fa6'
import { FaPlaneDeparture } from 'react-icons/fa'
import { RiVipLine } from "react-icons/ri";
import { useFetch } from '../../Hook/useFetch';

function CardActividades() {


    const requestOptions = {
        method: 'POST',
        token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiNmJjZWFhNWFlYWRkZTQyNDY3ZDZkYmJmMTVlMDhkMmVjMjZkZGM4Yjc5ZDZlZWM5NGIwODliOWRlMDUzNTdlMmE5YWUyOTc4ZjVhYzM5MTQiLCJpYXQiOjE2OTEwMDUwMDMuMjI5NzQzLCJuYmYiOjE2OTEwMDUwMDMuMjI5NzQ2LCJleHAiOjE3MjI2Mjc0MDMuMTA4MzU0LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.VPsULN8PnrW5EzFxiYlyn5R8ML4w0le-FvZFf1IxMOj2o2NVMUg-EERqJdKV3YWn2NquVgW8-SOPkmCtWJ4kfA_UZdaJ2JUkm0qo39cSNLt2AylXP8s4_pBK6cVBI8xo98fTkcoXgj-hDk6B04t4S2wIu7ddxSfgVdcWbVorN4Woac4i40d3xf6Iu-DnOfs6m5RKGDpOrzExQDrIn6A5_efpcNf1-I3rGgf00aAar2vKtdtZjFAzcVpDKMLm36Q-A0Yl54uEuC_e2RI2nsRhjtK7P0CwSPXzYyz29lU_k47WWJp4nVb0prt_-D5OHHk81LkFZqTiuiw5AB88_l3q65PG20oo8HSTW2c3hV1XPFHwhdVsjLncFX3TWhHUyHAIN48qBOiXl9JVmfeUj6t6uTurjRnaH-kykSke2dUPE77gCiMsLDUYA1dMD8EU42Y3F1tLWs4_CoXiwpjR2TGdjACY4FBHPwOAyrBpLIUKypeBcx3xrWcU2uZS7iTtQS_C2uhGyeMy0xSeBr0S0GICoJmiHmRUMc9gEHzlv40ObZpncXmw7VX1Txc5-DS6Y-GgjKjIPmmVQOWSJbjU7OqMtSaGyjmOTtECwgtlmFpfwEi0_g8L8T2OzgZVYOOROkzxOYnuCB1NLfj2N-NFcZ1cXUvB915l8C-v5ZD9Uulmxmsi',
        body: JSON.stringify({
        })
    };
    const { data, loading, error } = useFetch("http://192.168.1.9/api/servicios", requestOptions);
    const servicios = data;



    const hasServicios = servicios?.length > 0


    return (
        <>
            {hasServicios ? (
                servicios.map(servicio => (
                    <div key={servicio.id} className="col-md-12 col-lg-6 d-flex align-self-stretch ">
                        <div className={`services color-${servicio.id} services-1 d-block img`} style={{ backgroundImage: `url(${servicio.Poster})` }}>
                            <div className="icon d-flex align-items-center justify-content-center">
                                {servicio.id == 1 && <FaPersonHiking className="h1 text-white" />}
                                {servicio.id == 2 && <FaPlaneDeparture className="h1 text-white" />}
                                {servicio.id == 3 && <RiVipLine className="h1 text-white" />}
                                {servicio.id == 4 && <FaBus className="h1 text-white" />}
                            </div>
                            <div className="media-body">
                                <h3 className="heading mb-3">{servicio.Title}</h3>
                                <p>{servicio.Content}</p>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <p>*No se encontraron resultados</p>
            )}
        </>
    )
}
export default CardActividades
