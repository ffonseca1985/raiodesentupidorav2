import React from "react"
import Empresa from "../../components/empresa"
import Fachada from "../../components/fachada"
import Info from "../../components/info"
import Galeria from "../../components/galeria"
import Regioes from "../../components/regioes"
import Enquetes from "../../components/enquetes"
import FaleConosco from "../../components/faleConosco"
import Container from 'react-bootstrap/Container'

export default class Home extends React.Component {
    render() {
        return (
            <Container>
                <Fachada />
                <Info />
                <Galeria />
                <Empresa />
                <Regioes />
                {/* <Enquetes /> */}
                <FaleConosco />
            </Container>
        )
    }
}