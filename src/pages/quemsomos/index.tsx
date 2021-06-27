import React from "react"
import Empresa from "../../components/empresa"
import Fachada from "../../components/fachada"
import Container from "react-bootstrap/Container"



export default class QuemSomos extends React.Component {
    render() {
        return (
            <Container>
                <Fachada />
                <Empresa />
            </Container>
        )
    }
}