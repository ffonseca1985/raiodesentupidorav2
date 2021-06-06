import styled from "styled-components"

const  Titulo2 = (props : any) => (
    <>
        <Label> {props.texto} </Label>
        <br />
    </>
    )

const Label = styled.label`
    text-transform: uppercase;
`
export default Titulo2
