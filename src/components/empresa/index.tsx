
import { Component } from 'react'
import SubTitulo from '../tituto/Subtitulo'
import Titulo from '../tituto'

export default class Empresa extends Component {

    constructor(props : any) {
        super(props);
    }

    render() {
        return (
            <>
                <Titulo texto="A EMPRESA"></Titulo>
                <br />
                <SubTitulo texto="Missão, Visão e Valores"></SubTitulo>
                <br />
            </>
        )
    }

}