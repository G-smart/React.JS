import React, { Component } from 'react';
import '../App.css';

import {Card, CardDeck} from 'react-bootstrap';

class UserCard extends Component {

  render() {
    return (
      <div>
          <CardDeck>
            <Card>
                <img src={this.props.image} className="card-img-top"alt="Sorry no img" />
            <Card.Body>
                 <Card.Title>{this.props.username}</Card.Title>
            <div className="Card.Text">
                    <ul>
                        <li>Name: {this.props.name}</li>
                        <li>Gender: {this.props.gender}</li>
                        <li>Nationality: {this.props.nat}</li>
                        <li>Location: {this.props.location}</li>
                        <li>Email: {this.props.email}</li>
                    </ul>
            </div>
            </Card.Body>
            
            </Card>
         </CardDeck>
      </div>
    );
  }
}

export default UserCard;