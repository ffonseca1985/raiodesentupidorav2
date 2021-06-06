
import {Component} from 'react'
import {Link} from 'react-router-dom'

export default class Rodape extends Component {

    render () {
        return (
            <>
                <Link to="/servicos">
                    SERVICOS 2
                </Link>
                <Link to="/quemsomos">
                    QUEM SOMOS 3
                </Link>
            </>
        )
    }

}