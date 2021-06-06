import {Component} from 'react'
import {Link} from 'react-router-dom'

export default class MenuTopo extends Component {

    render () {
        return (
            <>
                <Link to="/servicos">
                    SERVICOS
                </Link>
                <Link to="/quemsomos">
                    QUEM SOMOS
                </Link>
            </>
        )
    }

}