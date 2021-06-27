import React from "react"
import FaleConosco from "../../components/faleConosco"
import Fachada from "../../components/fachada"
import Container from 'react-bootstrap/Container'

export default class Contato extends React.Component {
    render() {
        return (
            <Container>
                <Fachada />
                <FaleConosco />
            </ Container>
        )
    }
}