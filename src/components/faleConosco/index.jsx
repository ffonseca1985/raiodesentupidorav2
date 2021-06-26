import { Component } from 'react'
import { Input, TextArea } from '../input'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Titulo from '../tituto';
import Subtitulo from '../tituto/Subtitulo';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export class FaleConosco extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Row>
                <Col>
                    <Titulo texto="Solicite um orçamento Grátis" />
                    <Subtitulo texto="Entraremos em contao o mais rápido possivel.">
                            Marque uma visita!
                    </Subtitulo>
                </Col>

                <Col>
                    <Titulo texto="Orçamento Grátis" />
                    <Form>
                        <Input placeholder="digite o seu nome" label="Nome" type="text" />
                        <Input placeholder="digite o seu E-mail" label="Email" type="email" />
                        <Input placeholder="digite o seu Telefone" label="Telefone" type="tel" />
                        <TextArea placeholder="digite a mensagem" label="O que podemos ajudar?" />
                        <Button variant="primary" type="submit">
                            Enviar Mensagem
                        </Button>
                    </Form>
                </Col>
            </ Row>
        )
    }
}

export default FaleConosco