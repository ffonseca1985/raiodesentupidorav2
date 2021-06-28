import { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'
import BtnLigueAgora from '../botoes/ligueAgora'
import Form from 'react-bootstrap/Form'
import LogoTemp from "../logo"
import RedesSociais from "../redesSociais/redesSociais"

export default class MenuTopo extends Component {

    render() {
        return (
            <Navbar expand="lg" className="navbar navbar-expand-md navbar-dark bg-dark">
                <Container>
                    <Navbar.Brand href="/">
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

                            <NavDropdown title="Nossos Serviços" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/">Desentupimento de Canos</NavDropdown.Item>
                                <NavDropdown.Item href="/">Desentupimento de esgoto</NavDropdown.Item>
                            </NavDropdown>

                            <Nav.Link href="/quemSomos">
                                Quem somos
                            </Nav.Link>
                            <Nav.Link href="/contato">Contato</Nav.Link>
                            <Form className="d-flex">
                                <BtnLigueAgora />
                            </Form>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }

}