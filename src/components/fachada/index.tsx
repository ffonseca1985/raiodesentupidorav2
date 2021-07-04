
import Principal from './principal'
import Row from "react-bootstrap/Row"

import Col from "react-bootstrap/Col"
import TituloGenerico from '../tituto/TituloGenerico'
import BtnLigueAgora from '../botoes/ligueAgora'
import BtnWhatsApp from '../botoes/whatsApp'
import BtnFaleConosco from '../botoes/faleConosco'

const Fachada = () => (

    <Row style={style}>
        <Col>
            <div>
                <TituloGenerico
                    texto="DESENTUPIDORA 24 HORAS"
                    ClassName="font-weight-bold text-primary"></ TituloGenerico>

                <p>
                     A Raio resolve o seu problema com agilidade e o <span className="font-weight-bold  text-uppercase"> orçamento é Grátis! </span>
                </p>
                <p>
                    Desentupidora de pias, esgoto, caixa de gordura, ralo, vaso sanitário
                    e qualquer tipo de encanamento.
                </p>

                <div className="d-grid gap-2">
                    <BtnWhatsApp 
                        ClassName="btn-block font-weight-bold" />
                    
                    <BtnLigueAgora
                        ClassName="btn-block"
                        Variant="warning"
                        tel="5511980639525" />

                    <BtnFaleConosco 
                        ClassName="btn-block font-weight-bold" 
                        Variant="info" />
                </div>

            </div>
        </Col>
        <Col xs={8}  className="d-none d-md-block">
            <Principal />
        </Col>
    </ Row>
)

const style = {
    marginTop: 10
}

export default Fachada
