
import React from 'react'
import PropTypes from 'prop-types';

import QuemSomos from '../quemsomos'
import Servicos from '../servicos'
import Contato from '../contato'
import Home from '../home'

import {
    Switch,
    BrowserRouter as Router,
    Route
} from 'react-router-dom'


export default class Roteamento extends React.Component {

    static propTypes = {
        children: PropTypes.any
    };

    constructor(props) {
        super(props);
    }

    render() {

        return (

            <Router>
                {this.props.children}
                <Switch>
                    <Route path="/servicos">
                        <Servicos />
                    </Route>
                    <Route path="/quemsomos">
                        <QuemSomos />
                    </Route>
                    <Route path="/contato">
                        <Contato />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        )
    }
}

