import Titulo2 from '../tituto/Titulo2'
import SubTitulo from '../tituto/Subtitulo'
import Carousel from 'react-bootstrap/Carousel'

const Enquete = (props: any) => (

    <Carousel.Item>
        <img src={props.enquete.cliente.imagem} alt={props.enquete.cliente.nome} />
        wdqwqw
        <Carousel.Caption>
            <SubTitulo texto={props.enquete.comentario} />
            <Titulo2 texto={props.enquete.cliente.nome} />
            <SubTitulo texto={props.enquete.cliente.profissao} />
        </Carousel.Caption>

    </ Carousel.Item >
)

export default Enquete