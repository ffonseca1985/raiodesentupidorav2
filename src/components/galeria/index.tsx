import { Component } from "react";
import Figure from './figure'
import Tituto from '../tituto'

export default class Galeria extends Component {

    constructor(props: any) {
        super(props);
    }

    montarGaleria = (): any => {

        const imagens: any = [
            {
                "src": "",
                "alt": "imagem 1"
            },
            {
                "src": "",
                "alt": "imagem 2"
            },
        ];

        return imagens.map((imagem: any, index: any) => <Figure src={imagem.src} alt={imagem.alt} key={index} />)
    }

    render() {
        return (
            <>
                <Tituto texto="NOSSOS SERVIÇOS" />
                {this.montarGaleria()}
            </>
        )
    }
}