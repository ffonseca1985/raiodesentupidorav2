import Titulo2 from '../tituto/Titulo2'
import SubTitulo from '../tituto/Subtitulo'

const Enquete = (props: any) => (
    <>
        <img src={props.enquete.cliente.imagem} alt={props.enquete.cliente.nome} />
        <SubTitulo texto={props.enquete.comentario} />
        <br />
        <Titulo2 texto={props.enquete.cliente.nome} />
        <SubTitulo texto={props.enquete.cliente.profissao} />
    </>    
)

export default Enquete