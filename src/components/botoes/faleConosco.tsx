import Button from "react-bootstrap/Button"

const BtnFaleConosco = (props : any) => (

    <Button variant={props.Variant} className={`btn mb-4 ${props.ClassName}`} size="lg">
        Fale Conosco
    </Button>
)

export default BtnFaleConosco;
