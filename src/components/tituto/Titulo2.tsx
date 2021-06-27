import styled from "styled-components"

const  Titulo2 = (props : any) => (
    <strong>
        <Label> {props.texto} </Label>
    </strong>
    )

const Label = styled.label`
    text-transform: uppercase;
`
export default Titulo2
