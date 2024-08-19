import React, { Component } from 'react'; //hay que importar react library lo primero
import moment from "moment";

import PortfolioContainer from './portfolio/portfolio-container';

export default class App extends Component { //hay una librería dentro de react llamada components hy lo quiero usar dentro de nuestra clase app
  render() {//devuelve lo que se enseña en la página
    return (
      <div className='app'>
        <h1>Touré Barrero's portfolio</h1>
        <div>{moment().format('MMMM Do YYYY, h:mm:ss a')}</div>

        <PortfolioContainer />
      </div>
    );
  }
}
