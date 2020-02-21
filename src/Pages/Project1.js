import React, { Component } from 'react';

import ListItem from '../Components/ListItem';


class Project1 extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          shoppingList: [],
          newListItem: '',
        }
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
      }
    
      handleChange(e) {
        this.setState({ [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value });
      }
    
      handleSubmit(e) {
        e.preventDefault();
    
        // Blank items should not be added to the list.// 
        if (this.state.newListItem) {
    
          this.setState((prevState) => ({
            shoppingList: [...prevState.shoppingList, {
              name: this.state.newListItem,
              timestamp: Date.now()
            }],
            newListItem: ""
          }));
          console.log ('Created');
        }
      }
    
      handleDelete(e) {
        this.setState({shoppingList: this.state.shoppingList.filter(item => item.timestamp !== e)})
      }
    
    render() {
        const shoppingList = this.state.shoppingList;

        return (
            <div className="Project1Page">
               <div style={{backgroundColor: "lightgreen" }} className="container">
          <h1>Shopping List</h1>

          <form onClick={this.handleSubmit}>
            <label htmlFor="newListItem" style={{"display": "block",backgroundColor: "lightblue" }}>Add an item to your shopping list:</label><br />
            <input
              style={{backgroundColor: "orange" }}
              id="newListItem"
              name="newListItem"
              type="text"
              value={this.state.newListItem}
              onChange={this.handleChange} />

            <button 
              type="submit"
              style={{backgroundColor: "pink"}}
              >
              Add to Shopping list
            </button>
          </form>

          <h3>My List</h3>

          {shoppingList.length === 0 &&
            <p>You have no items on your list. Add one.</p>
          }

          {shoppingList.map((item) =>

              <ListItem key={item.timestamp}
                name={item.name}
                timestamp={item.timestamp}
                deleteAction={this.handleDelete}/>
          )}
        </div> 
            </div>
        );
    }
}

export default Project1;