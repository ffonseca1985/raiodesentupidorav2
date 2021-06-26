
import Form from 'react-bootstrap/Form'


const Input = (props: any) => (
    <section style={styleSection}>
        <Form.Label>{props.label}</Form.Label>
        <Form.Control type={props.type} placeholder={props.placeholder} /> 
    </section>
)

const TextArea = (props: any) => (
    <section style={styleSection}>
        <Form.Label>{props.label}</Form.Label>
        <Form.Control as="textarea" placeholder={props.placeholder} /> 
    </section>
)

const styleSection = {
    padding: "2px",
    margin: "2px"

}

export {Input, TextArea}
