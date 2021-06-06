import React from "react"
import Rodape from "../../components/rodape"
import Empresa from "../../components/empresa"
import Info from "../../components/info"

export default class Home extends React.Component {
    render() {
        return (
            <>
                <Info />
                <br />
                <Empresa />
                <br />
                <Rodape />
            </>
        )
    }
}