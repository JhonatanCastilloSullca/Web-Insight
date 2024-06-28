import { useContext, useEffect, useState } from 'react'
import './index.css'
import { Link, NavLink } from 'react-router-dom';
import Cart from '../Cart';
import { Col, Container, Dropdown, DropdownButton, Nav, NavDropdown, Navbar, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useFetch } from '../../Hook/useFetch';
import { GeneralContext } from '../../context/general';
import { DotLoader } from 'react-spinners';
import { FaEnvelope, FaFacebookF, FaInstagram, FaLinkedin, FaPhone, FaTwitter, FaYoutube } from 'react-icons/fa6';
import { FaTripadvisor } from 'react-icons/fa';
function Header() {
    const { general } = useContext(GeneralContext);
    const GeneralData = general.menus;
    const { t, i18n } = useTranslation("translation");

    const [imgpreview, setImgPreview] = useState('https://vertigotravelperu.com/wp-content/uploads/2022/09/manu1.png');
    const handleSlugTour = (imagen) => {
        setImgPreview(imagen)
    }
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobileView, setIsMobileView] = useState(window.innerWidth < 992);
    const [expanded, setExpanded] = useState(false);

    const handleToggle = () => setExpanded(!expanded);
    const handleClose = () => setExpanded(false);

    const handleChangeLng = (lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem('lng', lng);
        window.location.reload();
    };


    const [navbar, setNavbar] = useState(false);
    const [activeMenu, setActiveMenu] = useState(null);
    const handleMouseEnter = (menuId) => {
        setActiveMenu(menuId);
    };
    const handleMouseLeave = () => {
        setActiveMenu(null);
    };

    const renderMenu = (menu) => {
        if (activeMenu === menu.id) {
            return (
                <Container className='container-menu'>
                    <div className="drpwdpwm-menu">
                        <Row >
                            <Container className=' d-flex justify-content-center align-items-start'>
                                <Col md={8}  >
                                    <Row className=' d-flex justify-content-center align-items-start'>
                                        {menu.detalles && menu.detalles.length > 0 ? (
                                            menu.detalles.map((categoria) => (
                                                <Col key={categoria.id} className='p-0'>
                                                    <span className='nav-link tittle-categoria-header w-100'>
                                                        {categoria.categoria.nombre}
                                                    </span>
                                                    <Row>
                                                        <Col className='d-grid gap-2 height-menu '>
                                                            {categoria.categoria.tours.map((tour) => (
                                                                <NavLink
                                                                    to={`/tours/${tour.slug}`}
                                                                    onMouseOver={() => handleSlugTour(tour.imagenprincipal)}
                                                                    className='w-100 border-bot-menu p-0'
                                                                    key={tour.id}
                                                                >
                                                                    <div className="menu-title-nav pt-2">{tour.nombre}</div>
                                                                </NavLink>
                                                            ))}
                                                        </Col>
                                                    </Row>
                                                </Col>
                                            ))
                                        ) : (
                                            <li>No hay categorías disponibles</li>
                                        )}
                                    </Row>
                                </Col>
                                <Col md={4} className='d-flex justify-content-center align-items-center'>
                                    <div className='d-flex justify-content-center rounded'>
                                        <img
                                            src={imgpreview}
                                            alt="imagen"
                                            className='img-fluid p-4 img-menu '
                                        />
                                    </div>
                                </Col>
                            </Container>
                        </Row >
                    </div >
                </Container >
            );
        }
        return null;
    };



    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', changeBackground);
        window.addEventListener('resize', () => setIsMobileView(window.innerWidth < 992));

        return () => {
            window.removeEventListener('scroll', changeBackground);
            window.removeEventListener('resize', () => setIsMobileView(window.innerWidth < 992));
        };
    }, []);
    const requestOptions = {
        method: 'POST',
        body: JSON.stringify({
        })
    };

    const { data, loading, error } = useFetch("http://192.168.1.26/api/categorias", requestOptions);
    const categorias = data;
    window.addEventListener('scroll', changeBackground);
    if (loading) return <div className="mainloader">
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <DotLoader color="#f79633" loading={true} size={100} />
        </div>
    </div>;
    if (error) return <div className="mainloader">
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <DotLoader color="#ff0011" loading={true} size={100} />
        </div>
    </div>;
    if (!categorias) return <div>No se encontraron tours</div>;

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };


    return (
        <>

            {isMobileView ? (
                <Navbar expand="lg" className='p-0 bg-dark' expanded={expanded}>
                    <Navbar.Brand href="#">
                        <img
                            src="../src/assets/images/insight-logo-horizontal-2-white.webp"
                            height="30"
                            className="d-inline-block align-top px-4"
                            alt="Logo2"
                        />
                    </Navbar.Brand>
                    <DropdownButton
                        id="language-selector"
                        variant="transparent"
                        className="nav-link p-0 bg-transparent"
                        title={<span className="ml-2">{i18n.language === 'es' ? <img src="../../assets/images/iconos/pe.svg" className='flags text-white' alt="Perú" /> : <img src="../../assets/images/iconos/us.svg" className='flags' alt="Estados Unidos" />}</span>}
                    >
                        <Dropdown.Item onClick={() => handleChangeLng('es')}>
                            <img src="../../assets/images/iconos/pe.svg" className='flags' alt="Perú" />Español
                        </Dropdown.Item>
                        <Dropdown.Item onClick={() => handleChangeLng('en')}>
                            <img src="../../assets/images/iconos/us.svg" className='flags' alt="Estados Unidos" />English
                        </Dropdown.Item>
                    </DropdownButton>
                    <Navbar.Toggle aria-controls="basic-navbar-nav px-4" onClick={handleToggle} />
                    <Navbar.Collapse id="basic-navbar-nav" className='bg-light'>
                        <Nav className="ml-auto bg-menuvertigo">
                            {GeneralData.map((menu) => (
                                <NavDropdown title={menu.nombre} id={`nav-dropdown-${menu.id}`} key={menu.id}>
                                    {menu.detalles.map((detalle) => (
                                        <NavDropdown title={detalle.categoria.nombre} id={`nav-subdropdown-${detalle.id}`} key={detalle.id}>
                                            {detalle.categoria.tours.map((tour) => (
                                                <NavLink
                                                    to={`/tours/${tour.slug}`}
                                                    onClick={handleClose}
                                                    onMouseOver={() => handleSlugTour(tour.imagenprincipal)}
                                                    className='w-100 border-bot-menu p-0'
                                                    key={tour.id}
                                                >
                                                    <div className="menu-title-nav pt-2">{tour.nombre}</div>
                                                </NavLink>
                                            ))}
                                        </NavDropdown>
                                    ))}
                                </NavDropdown>
                            ))}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            )
                : (
                    navbar ? (
                        <Row className='w-100 m-0 fixed-navbar navbar'>
                            <Col md={12} className='bg-dark d-flex justify-content-center align-items-center p-2'>
                                <img src="../src/assets/images/insight-logo-horizontal-2-white.webp" className="img-size" alt="logo-vertigo" />
                            </Col>
                            <Col md={12} className='bg-dark d-flex justify-content-center align-items-center p-0'>
                                <Nav className="d-flex align-items-center text-white">
                                    <li className="nav-item d-flex align-items-center text-white">
                                        <NavLink to='/' className={({ isActive }) => {
                                            return isActive ? 'nav-link active' : ' nav-link'
                                        }}>
                                            {t("header.home")}
                                        </NavLink>
                                    </li>
                                    {GeneralData.filter(menu => menu.tipo === '1').map((menu) => (
                                        <li
                                            className="nav-item d-flex align-items-center text-white"
                                            key={menu.id}
                                        >
                                            <div
                                                className="nav-item"
                                                onMouseEnter={() => handleMouseEnter(menu.id)}
                                                onMouseLeave={() => handleMouseLeave(menu.id)}
                                            >
                                                <NavLink
                                                    className={({ isActive }) => {
                                                        return isActive ? 'nav-link ' : ' nav-link active '
                                                    }}
                                                >
                                                    {menu.nombre ? menu.nombre : 'Nombre no disponible'}
                                                </NavLink>
                                                {renderMenu(menu)}
                                            </div>
                                        </li>
                                    ))}
                                    {/* <li className="nav-item d-flex align-items-center text-white">
                                        <NavLink to='/tours' className={({ isActive }) => {
                                            return isActive ? 'nav-link active' : ' nav-link '
                                        }}>
                                            Tours
                                        </NavLink>
                                    </li> */}
                                    <li className="nav-item d-flex align-items-center text-white">
                                        <NavLink to='/nosotros' className={({ isActive }) => {
                                            return isActive ? 'nav-link active' : ' nav-link '
                                        }}>
                                            {t("header.about")}
                                        </NavLink>
                                    </li>
                                    <li className="nav-item d-flex align-items-center text-white">
                                        <NavLink to='/contacto' className={({ isActive }) => {
                                            return isActive ? 'nav-link active' : ' nav-link '
                                        }}>
                                            Contacto
                                        </NavLink>
                                    </li>
                                    <li className="nav-item d-flex align-items-center text-white">
                                        <DropdownButton
                                            id="language-selector"
                                            variant="transparent"
                                            className="nav-link p-0 bg-transparent"
                                            title={<><span className="ml-2">{i18n.language === 'es' ? <img src="../../src/assets/images/iconos/pe.svg" className='flags text-white' alt="Perú" /> : <img src="../../src/assets/images/iconos/us.svg" className='flags' alt="Estados Unidos" />}</span></>}
                                        >
                                            <Dropdown.Item onClick={() => handleChangeLng('es')}>
                                                <img src="../../src/assets/images/iconos/pe.svg" className='flags' alt="Perú" />Español
                                            </Dropdown.Item>
                                            <Dropdown.Item onClick={() => handleChangeLng('en')}>
                                                <img src="../../src/assets/images/iconos/us.svg" className='flags' alt="Estados Unidos" />English
                                            </Dropdown.Item>
                                        </DropdownButton>
                                    </li>
                                    <li className="nav-item d-flex align-items-center text-white">
                                        <Cart></Cart>
                                    </li>
                                </Nav>
                            </Col>
                        </Row>
                    ) : (
                        <Row className='w-100 m-0 fixed-navbar navbar' >
                            < Col md={3} className='bg-dark p-4 py-2 d-flex justify-content-center align-items-center'>
                                <img src="../src/assets/images/insight-logo-horizontal-2-white.webp" className="img-size" alt="logo-vertigo" />
                            </Col >
                            <Col md={9} className='bg-white'>
                                <Row className='w-100'>
                                    <Col md={7} className='bg-white d-flex justify-content-start align-items-center'>
                                        <div className="h-100 d-inline-flex align-items-center py-2 me-4">
                                            <FaEnvelope />
                                            <p className="mb-0">info@cuscoinsight.com</p>
                                        </div>
                                        <div className="h-100 d-inline-flex align-items-center py-2 me-4">
                                            <FaPhone />
                                            <p className="mb-0">+51 980 693 523</p>
                                        </div>

                                    </Col>
                                    <Col md={5} className='bg-dark bg-white d-flex justify-content-end align-items-center px-2'>
                                        <div className="d-inline-flex align-items-center py-2">
                                            <a className="me-3" href="https://www.facebook.com/cusco.insight/"><FaFacebookF /></a>
                                            <a className="me-3" href="https://www.tripadvisor.com/Attraction_Review-g294314-d17478297-Reviews-Cuzco_Travel-Cusco_Cusco_Region.html"><FaTripadvisor /></a>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={12} className='bg-dark d-flex justify-content-end align-items-center py-2 px-4'>
                                        <Nav className="d-flex align-items-center text-white">
                                            <li className="nav-item d-flex align-items-center text-white">
                                                <NavLink to='/' className={({ isActive }) => {
                                                    return isActive ? 'nav-link active' : ' nav-link'
                                                }}>
                                                    {t("header.home")}
                                                </NavLink>
                                            </li>
                                            {GeneralData.filter(menu => menu.tipo === '1').map((menu) => (
                                                <li
                                                    className="nav-item d-flex align-items-center text-white"
                                                    key={menu.id}
                                                >
                                                    <div
                                                        className="nav-item"
                                                        onMouseEnter={() => handleMouseEnter(menu.id)}
                                                        onMouseLeave={() => handleMouseLeave(menu.id)}
                                                    >
                                                        <NavLink
                                                            className={({ isActive }) => {
                                                                return isActive ? 'nav-link ' : ' nav-link active '
                                                            }}
                                                        >
                                                            {menu.nombre ? menu.nombre : 'Nombre no disponible'}
                                                        </NavLink>
                                                        {renderMenu(menu)}
                                                    </div>
                                                </li>
                                            ))}
                                            {/* <li className="nav-item d-flex align-items-center text-white">
                                                <NavLink to='/tours' className={({ isActive }) => {
                                                    return isActive ? 'nav-link active' : ' nav-link '
                                                }}>
                                                    Tours
                                                </NavLink>
                                            </li> */}
                                            <li className="nav-item d-flex align-items-center text-white">
                                                <NavLink to='/nosotros' className={({ isActive }) => {
                                                    return isActive ? 'nav-link active' : ' nav-link '
                                                }}>
                                                    {t("header.about")}
                                                </NavLink>
                                            </li>
                                            <li className="nav-item d-flex align-items-center text-white">
                                                <NavLink to='/contacto' className={({ isActive }) => {
                                                    return isActive ? 'nav-link active' : ' nav-link '
                                                }}>
                                                    Contacto
                                                </NavLink>
                                            </li>
                                            <li className="nav-item d-flex align-items-center text-white">
                                                <DropdownButton
                                                    id="language-selector"
                                                    variant="transparent"
                                                    className="nav-link p-0 bg-transparent"
                                                    title={<><span className="ml-2">{i18n.language === 'es' ? <img src="../../src/assets/images/iconos/pe.svg" className='flags text-white' alt="Perú" /> : <img src="../../src/assets/images/iconos/us.svg" className='flags' alt="Estados Unidos" />}</span></>}
                                                >
                                                    <Dropdown.Item onClick={() => handleChangeLng('es')}>
                                                        <img src="../../src/assets/images/iconos/pe.svg" className='flags' alt="Perú" />Español
                                                    </Dropdown.Item>
                                                    <Dropdown.Item onClick={() => handleChangeLng('en')}>
                                                        <img src="../../src/assets/images/iconos/us.svg" className='flags' alt="Estados Unidos" />English
                                                    </Dropdown.Item>
                                                </DropdownButton>
                                            </li>
                                            <li className="nav-item d-flex align-items-center text-white">
                                                <Cart></Cart>
                                            </li>
                                        </Nav>
                                    </Col>
                                </Row>
                            </Col>
                        </Row >
                    )
                )
            }

        </>
    )
}

export default Header


