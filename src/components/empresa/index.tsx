
import { Component } from 'react'
import SubTitulo from '../tituto/Subtitulo'
import Titulo from '../tituto'
import Card from 'react-bootstrap/Card'

import Titulo2 from '../tituto/Titulo2'
import Subtitulo from '../tituto/Subtitulo'
import CardColumns from 'react-bootstrap/CardColumns'

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
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title><Titulo2 texto="Missao" /></Card.Title>
                            <Card.Text>
                                <Subtitulo texto="Missao" />
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title><Titulo2 texto="Missao" /></Card.Title>
                            <Card.Text>
                                <Subtitulo texto="Missao" />
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title><Titulo2 texto="Missao" /></Card.Title>
                            <Card.Text>
                                <Subtitulo texto="Missao" />
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardColumns>
            </>
        )
    }
}