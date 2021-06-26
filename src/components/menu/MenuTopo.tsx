import { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'

export default class MenuTopo extends Component {

    render() {
        return (
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand href="/">
                        Logo
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav>
                            <Nav.Link href="/servicos">Serviços</Nav.Link>
                            <Nav.Link href="/servicos">Quem somos</Nav.Link>
                            <Nav.Link href="/contato">Contato</Nav.Link>

                            <NavDropdown title="Nossos Serviços" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/">Desentupimento de Canos</NavDropdown.Item>
                                <NavDropdown.Item href="/">Desentupimento de esgoto</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }

}