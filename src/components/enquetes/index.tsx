
import { Component } from 'react';
import Enquete from './enquete'
import Titulo2 from '../tituto/Titulo2'

export default class Enquetes extends Component {

    constructor(props: any) {
        super(props);
    }

    buscarEnquetes = () => {

        const enquetes = [
            {
                "cliente": {
                    "nome": "Carmelita R. Fonseca",
                    "profissao": "Motorista de Transporte Escolar",
                    "imagem": ""
                },
                "comentario": "Serviço de muita qualidade, o pessoal da Raio Desentupidora realizaram o serviço de forma ágil e eficiente. Recomendo!"
            }
        ]

        return enquetes.map((enquete, index) => <Enquete enquete={enquete} key={index}/>)
    }

    render() {
        return (
            <>
                <Titulo2 texto="Clientes Satisfeitos" />
                <br />
                {this.buscarEnquetes()}
            </>
        )
    }
}