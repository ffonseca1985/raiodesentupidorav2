
import { Component } from 'react'
import SubTitulo from '../tituto/Subtitulo'
import Titulo from '../tituto'
import Card from 'react-bootstrap/Card'

import Titulo2 from '../tituto/Titulo2'
import Subtitulo from '../tituto/Subtitulo'
import CardColumns from 'react-bootstrap/CardColumns'

import Missao from "../../assets/Missao.JPG"

export default class Empresa extends Component {

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <>
                <Titulo texto="A EMPRESA"></Titulo>
                <SubTitulo texto="Missão, Visão e Valores"></SubTitulo>

                <CardColumns>
                    <Card>
                        <Card.Img variant="top" src={Missao} style={{width:"300px"}}/>
                        <Card.Body>
                            <Card.Title><Titulo2 texto="Missao" /></Card.Title>
                            <Card.Text style={{height:"100px"}}>
                                <Subtitulo texto="Prestar serviços de Saneamento Ambiental de forma sustentável." />
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={Missao} style={{width:"300px"}}/>
                        <Card.Body>
                            <Card.Title><Titulo2 texto="Visão" /></Card.Title>
                            <Card.Text style={{height:"100px"}}>
                                <Subtitulo texto="Ser uma empresa de excelência, referência no mercado de dedetização e desentupimento comprometida com o bem-estar do cliente." />
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={Missao} style={{width:"300px"}}/>
                        <Card.Body>
                            <Card.Title><Titulo2 texto="Valores" /></Card.Title>
                            <Card.Text style={{height:"100px"}}>
                                <Subtitulo texto="Exercer suas atribuições com dedicação, ética e respeito." />
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardColumns>
            </>
        )
    }
}