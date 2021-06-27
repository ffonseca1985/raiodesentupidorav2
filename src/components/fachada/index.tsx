
import Principal from './principal'
import Row from "react-bootstrap/Row"
import Alert from "react-bootstrap/Alert"

import Col from "react-bootstrap/Col"
import Titulo2 from '../tituto/Titulo2'
import TituloGenerico from '../tituto/TituloGenerico'
import SubTitulo from '../tituto/Subtitulo'
import BtnLigueAgora from '../botoes/ligueAgora'
import BtnWhatsApp from '../botoes/whatsApp'

const Fachada = (props: any) => (

    <Row>
        <Col>
            <Alert>
                <TituloGenerico 
                    texto="Desentupidora 24 horas"
                    ClassName="font-weight-bold text-primary"></ TituloGenerico>

                <SubTitulo texto="Olá tudo bem?, Tem algúm problema? Se sim, a raío resolve o seu problema com agilidade e o orçamento é Grátis!">
                    <p className="font-weight-bold text-justify">
                        Desentupidora de pias, esgoto, caixa de gordura, ralo, Vaso sanitário
                        e qualquer tipo de encanamento.
                    </p>
                </SubTitulo>
                <div className="d-grid gap-2">
                    <BtnWhatsApp ClassName="btn-block" />
                    <BtnLigueAgora ClassName="btn-block" Variant="warning" />
                </div>

            </Alert>
        </Col>
        <Col xs={8}>
            <Principal />
        </Col>
    </ Row>
)

export default Fachada
