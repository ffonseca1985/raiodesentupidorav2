import { Component } from 'react'
import { Input, TextArea } from '../input'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Titulo from '../tituto';
import Subtitulo from '../tituto/Subtitulo';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BtnEnviarMensagem from '../botoes/enviar'

export class FaleConosco extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Row style={style}>
                <Col>
                    <Titulo texto="Solicite um orçamento Grátis" />
                    <Subtitulo texto="Entraremos em contao o mais rápido possivel.">
                        <p>Marque uma visita!</p>
                    </Subtitulo>
                </Col>

                <Col>
                    <Titulo texto="Fale Conosco" />
                    <Form>
                        <Input placeholder="digite o seu nome" label="Nome" type="text" />
                        <Input placeholder="digite o seu E-mail" label="Email" type="email" />
                        <Input placeholder="digite o seu Telefone" label="Telefone" type="tel" />
                        <TextArea placeholder="digite a mensagem" label="O que podemos ajudar?" />
                        <BtnEnviarMensagem />
                    </Form>
                </Col>
            </ Row>
        )
    }
}
const style = {
    marginTop: 10
}

export default FaleConosco