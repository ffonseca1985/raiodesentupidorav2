import Button from "react-bootstrap/Button"
import {
    useHistory,
  } from "react-router-dom";

const BtnFaleConosco = (props: any) => {

    const history = useHistory()

    function onClick() {
        history.push("/contato")
    }

    return (
        <Button
            onClick={() => onClick()}
            variant={props.Variant}
            className={`btn mb-4 bold ${props.ClassName}`}
            size="lg">
            Fale Conosco
        </Button>
    )
}

export default BtnFaleConosco;
