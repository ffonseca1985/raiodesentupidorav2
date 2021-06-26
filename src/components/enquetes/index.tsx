
import { Component } from 'react';
import Enquete from './enquete';
import Titulo from '../tituto';
import Carousel from 'react-bootstrap/Carousel';

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

        const enquetesMap = enquetes.map((enquete, index) => <Enquete enquete={enquete} key={index}/>)

        return <Carousel> { enquetesMap} </Carousel>
    }

    render() {
        return (
            <>
                <Titulo texto="Clientes Satisfeitos" />
                
                {this.buscarEnquetes()}
            </>
        )
    }
}