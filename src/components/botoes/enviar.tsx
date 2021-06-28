import Button from "react-bootstrap/Button"
import SvgENviar from "./svg/svgENviar"

const BtnEnviarMensagem = (props : any) => (

    <Button variant={props.Variant} className={`btn mb-4 ${props.ClassName}`} size="lg">
        <SvgENviar />
        <strong> Enviar Mensagem</strong> 
    </Button>
)

export default BtnEnviarMensagem;
