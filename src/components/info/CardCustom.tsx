
import Titulo2 from '../tituto/Titulo2'

import Card from 'react-bootstrap/Card'

const CardCustom = (props: any) => (

        <Card className={props.className}>
            <Card.Body>
                {props.children}
                <Card.Title><Titulo2 texto={props.titulo} /></Card.Title>
                <Card.Text>
                    {props.subTitulo}
                </Card.Text>
            </Card.Body>
        </Card>

)

export default CardCustom