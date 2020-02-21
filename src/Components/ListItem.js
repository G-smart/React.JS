import React, { Component } from 'react';


class ListItem extends Component {
  constructor(props) {
    super(props);

    this.onDelete = this.onDelete.bind(this);
  }

  onDelete(e) {
    e.preventDefault();
    this.props.deleteAction(this.props.timestamp);
    console.log ('Deleted');
  }

  render() {
    return (
      <div className="ListItem" key={this.props.timestamp}>
        {this.props.name}
        < span className = "ListItem__timestamp" > {
            new Intl.DateTimeFormat('en-US', {
              year: 'numeric',
              month: 'numeric',
              day: 'numeric',
              hour: 'numeric',
              minute: 'numeric',
              second: 'numeric'
            }).format(this.props.timestamp)
          } 
        </span>
        
        <button
               style = {{"marginLeft": "5px",backgroundColor: "red"}}
              onClick = {this.onDelete} >
              Delete
        </button> 
      </div>
    );
  }
}

export default ListItem;