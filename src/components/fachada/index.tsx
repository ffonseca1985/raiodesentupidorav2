
import Principal from './principal'
import Row from "react-bootstrap/Row"
import Alert from "react-bootstrap/Alert"

import Col from "react-bootstrap/Col"
import TituloGenerico from '../tituto/TituloGenerico'
import SubTitulo from '../tituto/Subtitulo'
import BtnLigueAgora from '../botoes/ligueAgora'
import BtnWhatsApp from '../botoes/whatsApp'
import BtnFaleConosco from '../botoes/faleConosco'

const Fachada = (props: any) => (

    <Row style={style}>
        <Col>
            <div>
                <TituloGenerico 
                    texto="DESENTUPIDORA 24 HORAS"
                    ClassName="font-weight-bold text-primary"></ TituloGenerico>

                <SubTitulo texto="Olá tudo bem? Tem algum problema? Se sim, a Raio resolve o seu problema com agilidade e o orçamento é Grátis!">
                    <p className="font-weight-bold text-justify">
                        Desentupidora de pias, esgoto, caixa de gordura, ralo, Vaso sanitário
                        e qualquer tipo de encanamento.
                    </p>
                </SubTitulo>
                <div className="d-grid gap-2">
                    <BtnWhatsApp ClassName="btn-block" />
                    <BtnLigueAgora ClassName="btn-block" Variant="warning" />
                    <BtnFaleConosco ClassName="btn-block" Variant="primary" />
                </div>

            </div>
        </Col>
        <Col xs={8}>
            <Principal />
        </Col>
    </ Row>
)

const style = {
    marginTop: 10
}

export default Fachada
