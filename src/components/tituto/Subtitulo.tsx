
const SubTituto = (props: any) => (

        <p className="text-justify">
            <label>{props.texto}</label>
            { props.children }
        </p>
        
        )

export default SubTituto
