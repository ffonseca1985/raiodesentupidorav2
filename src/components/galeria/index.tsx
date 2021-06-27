import { Component } from "react";
import Figure from 'react-bootstrap/Figure';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Tituto from '../tituto'

export default class Galeria extends Component {

    constructor(props: any) {
        super(props);
    }

    montarGaleria = (): any => {

        const imagens: any = [
            {
                "src": "",
                "alt": "imagem 1 (171x180)",
                "caption": "Caption1"
            },
            {
                "src": "",
                "alt": "imagem 2 (171x180)",
                "caption": "Caption1"
            },
        ];

        return imagens.map((imagem: any, index: any) => (

            <Figure key={index}>
                <Figure.Image
                    width={171}
                    height={180}
                    alt={imagem.alt}
                    src="holder.js/171x180"
                />
                <Figure.Caption>
                   {imagem.caption}
                </Figure.Caption>
            </Figure>
        ))
    }

    render() {
        return (
            <>
                <Tituto texto="NOSSOS SERVIÇOS" />
                <Jumbotron>
                    {this.montarGaleria()}
                </ Jumbotron>
            </>
        )
    }
}