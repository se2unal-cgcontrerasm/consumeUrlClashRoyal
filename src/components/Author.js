import React, { Component } from 'react';
import '../styles/App.css';

class Author extends Component {
    
    constructor(props){
        super(props);
    }
    
  render() {
    return (
        <tr>
           <td>{this.props.name} </td>
           <td>{this.props.type} </td>
           <td>{this.props.rarity} </td>
           <td>{this.props.elixirCost} </td>
           <td>{this.props.description} </td>
        </tr>
    );
  }
}

export default Author;