
import Titulo2 from '../tituto/Titulo2'
import Subtitulo from '../tituto/Subtitulo'

import Card from 'react-bootstrap/Card'

const CardCustom = (props: any) => (

        <Card>
            <Card.Body>
                {props.children}
                <Card.Title><Titulo2 texto={props.titulo} /></Card.Title>
                <Card.Text>
                    <Subtitulo texto={props.subTitulo} />
                </Card.Text>
            </Card.Body>
        </Card>

)

export default CardCustom