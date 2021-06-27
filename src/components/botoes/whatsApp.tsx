import Button from "react-bootstrap/Button"
import SvgWhatsApp from "../redesSociais/svg/whatsApp"

const BtnWhatsApp = (props : any) => (

    <Button variant="success" className={props.ClassName} size="lg">
       <SvgWhatsApp /> WhatsApp
    </Button>
)

export default BtnWhatsApp;
