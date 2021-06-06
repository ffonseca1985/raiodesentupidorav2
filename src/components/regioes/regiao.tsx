import Titulo from '../tituto'


const Regiao = (props: any) => (

    <>
        <br />
        <a href={props.href} title={props.descricao}>
            <Titulo texto={props.descricao} />
        </a>
    </>
)

export default Regiao