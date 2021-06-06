import { Component } from 'react'
import Titulo from '../tituto'
import Regiao from './regiao'

export default class Regioes extends Component {

    constructor(props : any) {
        super(props);
    }

    buscarRegioes = () => {

        const regioes = [
            { "href":"href 1", "descricao": "descricao 1"},
            { "href":"href 2", "descricao": "descricao 2"},
            { "href":"href 3", "descricao": "descricao 3"}
        ];

        return regioes.map((regiao, index) => <Regiao href={regiao.href} descricao={regiao.descricao} key={index} />)
    }

    render() {
        return (
            <>
                <Titulo texto="REGIÃO DE SÃO PAULO E DA GRANDE SÃO PAULO"></Titulo>
                {this.buscarRegioes()}
            </>
        )
    }
}

