
import Col from 'react-bootstrap/Col'

const Regiao = (props: any) => (

    <Col xs={4}>
        <a href={props.href} title={props.descricao}>
            {props.descricao}
        </a>
    </ Col>
)

export default Regiao