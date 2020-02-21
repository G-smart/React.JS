import React, { Component } from 'react';

import UserCard from './UserCard';


import axios from 'axios';


class Users extends Component {
    constructor(props) {
    super(props);

    this.state = {
      users: []
      
    };

    this.getUsers();
  }

  getUsers() {
      // 1. make API request
      axios.get('https://randomuser.me/api/?results=10')
      // 2. process success response
      .then(response => {
        this.setState({users: response.data.results});
        console.log(response.data);
      })
      // 3. process error response
      .catch(function (error) {
        console.error(error);
      });
  }

  onDelete(index) {
      // 1. get users
      let theUsers = this.state.users;

      // 2. delete user by index
      theUsers.splice(index, 1);

      // 3. setState
      this.setState({users: theUsers});


  }
  
    
  render() {
    // 1. GET data
    if (this.state.users.length === 0) {
    
    return (<div>Loading ...</div>);
    } else {
      return (
        <div>
          <h1>Users</h1>
            <ul>
              {
                this.state.users.map((user, index) =>
                  <li key={index}>
                    <UserCard
                      username={user.login.username}
                      name={`${user.name.title}. ${user.name.first} ${user.name.last}`}
                      location={`${user.location.city}, ${user.location.state}`}
                      image={user.picture.large}
                      nat={user.nat}
                      gender={user.gender}
                      email={user.email}
                    />
                    <button
                      
                      onClick = {this.onDelete.bind(this, index)}>
                      Delete
                    </button>
                  </li>
                )
              }
            </ul>
        </div>
      );
    }
  }
}

export default Users;