import { useContext } from 'react';
import './index.css'
import { GeneralContext } from '../../context/general';
function Parallax() {
    // style={{ backgroundImage: `url(${parallax.imagen})` }}
    const { general } = useContext(GeneralContext);
    const GeneralData = general.nosotros;
    return (
        <div className="ftco-section ftco-about img" style={{ backgroundImage: `url('${GeneralData.image_secundaria}')` }}>
            <div className="overlay overlay-parallax"></div>
        </div>
    );
}

export default Parallax
