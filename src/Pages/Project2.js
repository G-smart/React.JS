import React, { Component } from 'react';
import axios from 'axios';
import '../App';

class Project2 extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          books: [],
          query: 'harrypotter',
          errorMsg: null
        };
      }
    
      // On page Load
       
      componentDidMount() {
        this.getBooks(this.state.query);
      }
    
      onInputTextChange = (e) => {
        this.setState({query: e.target.value});
        console.log(e.target.value);
      }
    
      // on Search Btn Click
      
      onSearchBtnClick() {
        // 1. get text input value
        const textInput = this.state.query;
    
        // 2. get books by text input value
        this.getBooks(textInput);
      }
    
      getBooks(query) {
        this.setState({errorMsg: null});
        axios.get('https://www.googleapis.com/books/v1/volumes?q=' + query)
          .then(response => {
            // 1. handle no item case
            if (!response.data.items){
              this.setState({errorMsg : "no books found for: " + query});
            } else {
              this.setState(() => ({
                books: response.data.items
              }));
            }
            console.log(response.data);
          })
          .catch(function (error) {
            console.error(error);
          });
      }
    
    render() {
        return (
            <div className="Project2Page">
                <input type="text" value={this.state.query}
                onChange={this.onInputTextChange}>
            </input> 
            <button onClick={this.onSearchBtnClick.bind(this)}>
              Search
            </button> 

            <p style={{color: 'red'}}>{this.state.errorMsg}</p>

        <ul> {this.state.books.map((items, index) => ( < li key = {index}>
               
          <img src={items.volumeInfo.imageLinks && items.volumeInfo.imageLinks.smallThumbnail } alt="Sorry"></img>
              <p> {items.volumeInfo.title}</p> 
              <p> {items.volumeInfo.authors}</p>
              <p>{items.volumeInfo.description}</p>
              <h4>{items.volumeInfo.categories}</h4>
              <a href={items.volumeInfo.previewLink} target="_blank">Link</a>
          
          </li>
             ))
             } 
         </ul>
            </div>
        );
    }
}

export default Project2;