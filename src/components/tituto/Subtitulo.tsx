
const SubTituto = (props: any) => (

        <p className={`text-justify ${props.ClassName}`}>
            <label>{props.texto}</label>
            { props.children }
        </p>
        
        )

export default SubTituto
