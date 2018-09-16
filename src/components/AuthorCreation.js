import React, { Component } from 'react';
import '../styles/App.css';
import Author from './Author';
import axios from 'axios';

class AuthorList extends Component {
    constructor(props){
        super(props);
        this.state = {
            authors : []
        };
    }
    
    componentWillMount(){
        
        
        axios({
            method:'get',
            url:'https://dog.ceo/api/breeds/list/all',
        })
    .then(function(response) {
        console.log(response);
    
    })
    .catch(function (error) {
        console.log(error);
    });
    
    
    
    }
    
  render() {
      const domAuthors = this.state.authors.map((author) => {
          <Author name={author.name} age={author.age} genre={author.genre}/>
      })
      
    return (
        <div>
            {domAuthors}
        </div>
    );
  }
}

export default AuthorList;