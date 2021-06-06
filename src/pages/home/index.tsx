import React from "react"
import Rodape from "../../components/rodape"
import Empresa from "../../components/empresa"
import Info from "../../components/info"
import Galeria from "../../components/galeria"
import Regioes from "../../components/regioes"
import Enquetes from "../../components/enquetes"

export default class Home extends React.Component {
    render() {
        return (
            <>
                <Info />
                <br />
                <Galeria />
                <br />
                <Empresa />
                <br />
                <Regioes />
                <br />
                <Enquetes />
                <br />
                <br />
                <Rodape />
            </>
        )
    }
}