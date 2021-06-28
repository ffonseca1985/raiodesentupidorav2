
import Form from 'react-bootstrap/Form'


const Input = (props: any) => (
    <section style={styleSection}>
        <Form.Label>{props.label}</Form.Label>
        <Form.Control {...props} /> 
    </section>
)

const InputBasic = (props: any) => (
    <section style={styleSection}>
        <Form.Control
            {...props} /> 
    </section>
)

const TextArea = (props: any) => (
    <section style={styleSection}>
        <Form.Label>{props.label}</Form.Label>
        <Form.Control as="textarea" {...props} /> 
    </section>
)

const styleSection = {
    padding: "2px",
    margin: "2px"

}

export {Input, TextArea, InputBasic}
