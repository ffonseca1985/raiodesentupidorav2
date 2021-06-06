
import Titulo2 from '../titulos/Titulo2'
import Subtitulo from '../titulos/Subtitulo'

 const Cards = (props : any) =>(
    <>
        <Titulo2 texto = {props.titulo} ></Titulo2>
        <Subtitulo texto = {props.subTitulo} ></Subtitulo>
        <br />
    </>
    )

export default  Cards 