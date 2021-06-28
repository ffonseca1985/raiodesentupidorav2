
import Button from "react-bootstrap/button"

const BtnInscrever = (props: any) => (

    <Button type="submit"
        {...props}
        className={`btn  ${props.ClassName == undefined ? "btn-outline-light" : props.ClassName} mb-4`}>

        {props.descricao == undefined  ? "Inscrever-se" : props.descricao}
    </Button>
)

export default BtnInscrever

