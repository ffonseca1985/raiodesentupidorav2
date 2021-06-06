import React from "react"
import Rodape from "../../components/rodape"
import Empresa from "../../components/empresa"

export default class Home extends React.Component {
    render() {
        return (
            <>
                <Empresa />
                
                <Rodape />
            </>
        )
    }
}