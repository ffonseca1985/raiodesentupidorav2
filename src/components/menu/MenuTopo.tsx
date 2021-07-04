import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'
import BtnLigueAgora from '../botoes/ligueAgora'
import Form from 'react-bootstrap/Form'
import LogoTemp from "../logo"
import RedesSociais from "../redesSociais/redesSociais"

import {
    useHistory,
} from "react-router-dom";


const MenuTopo = () => {

    const history = useHistory()

    function redirect(url: any) {
        history.push(url)
    }

    return (
        <Navbar expand="lg" className="navbar navbar-expand-md navbar-dark text-light bg-primary" >
            <Container>
                <Navbar.Brand
                    onClick={() => redirect("/")}
                    className="acncor">
                    <Form>
                        <LogoTemp />
                    </Form>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav>
                        <Form className="d-flex">
                            <RedesSociais ClassName="btn-outline-light" />
                        </Form>

                        <NavDropdown
                            title=
                            {
                                <span className="text-light">SERVIÇOS</span>
                            }
                            id="basic-nav-dropdown">
                            <NavDropdown.Item href="/">Desentupimento de Canos</NavDropdown.Item>
                            <NavDropdown.Item href="/">Desentupimento de esgoto</NavDropdown.Item>
                        </NavDropdown>

                        <Nav.Link onClick={() => redirect("/quemsomos")} className="text-light">
                            QUEM SOMOS
                        </Nav.Link>
                        <Nav.Link
                            onClick={() => redirect("contato")}
                            className="text-light">
                            CONTATO
                        </Nav.Link>
                        <Form className="d-flex">
                            <BtnLigueAgora 
                                Variant="outline-light"
                                tel="5511980639525" />
                        </Form>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    )
}

export default MenuTopo

