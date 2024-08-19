import React, {Component} from "react";
import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
    constructor() {//solo se pueden usar los constructores dentro de los class components. es donde escribiremos la lógica de la class
        super(); //te permite usar toda la librería de Component

        this.state = {
            pageTitle: "Welcome to my portfolio!",
            data: [
                { title: "hola" },
                { title: "quetal" },
                { title: "yo" },
                { title: "soy" }
            ]

        };
    }
//ahora data es un array de objetos así que lo llamareos así
    portfolioItems() {
        //const data = ["Hola", "quetal", "bien"];

        return this.state.data.map(item => {
            return <PortfolioItem title={item.title} url={"google.com"} />;
            //return <h1>{item}</h1> TAMBIÉN PUEDO HACER ESTE TIPO DE RETURN 
        })
    }
    
    render() {
        return (//escribimos html code dentro, se llama JSX. Cuando queremos usar JS code dentro de la función render tenemos ue usar curly brackets {}
            <div>
                <h2>{this.state.pageTitle}</h2>
                
                {this.portfolioItems()}

            </div>
        );
    }
}

