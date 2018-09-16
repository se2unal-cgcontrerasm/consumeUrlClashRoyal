import React, { Component } from 'react';
import '../styles/App.css';
import Author from './Author';
import axios from 'axios';

class AuthorList extends Component {
    constructor(props){
        super(props);
        this.state = {
            cards : []
        };
    }
    
    componentWillMount(){
        axios({
            method:'get',
            url:'https://www.clashapi.xyz/api/cards',
        })
    .then(response=> {
        const cards = response.data;
        this.setState({cards});
        console.log(response);
    
    })
    .catch(function (error) {
        console.log(error);
    });
    
    
    
    }
    
  render() {
      const domAuthors = this.state.cards.map((card) => {
          return <Author name={card.name} type={card.type} rarity={card.rarity} elixirCost={card.elixirCost} description={card.description}/>
      })
      
    return (
        <div>
            <h1>Cartas del Clash Royal</h1>
            <table>
                <tr>
                    <th>Nombre</th>
                    <th>Tipo</th>
                    <th>Rareza</th>
                    <th>Costo de Elixir</th>
                    <th>Descripción</th>
                </tr>
                {domAuthors}
            </table>
        </div>
    );
  }
}

export default AuthorList;