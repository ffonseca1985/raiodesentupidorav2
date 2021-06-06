import { Component } from 'react';
import MenuTopo from '../../components/menu/MenuTopo'
import './App.css';
import Roteamento from './Roteamento'

export default class App extends Component {

  render() {
    return (
      <>
        <Roteamento>
          <MenuTopo />
          <br/>
        </Roteamento>
      </>
    );
  }
}