import Button from "react-bootstrap/Button"
import SvgWhatsApp from "../redesSociais/svg/whatsApp"

const BtnWhatsApp = (props : any) => (

    <Button 
            variant="success" 
            className={props.ClassName} 
            size="lg" 
            target="_blank"
            href="https://api.whatsapp.com/send?phone=5511980639525">
       <SvgWhatsApp /> WhatsApp
    </Button>
)




export default BtnWhatsApp;
