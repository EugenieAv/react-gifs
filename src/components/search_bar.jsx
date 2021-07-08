import React, { Component } from 'react';

class SearchBar extends Component {
  handleUpdate = (event) => {
    // console.log(event.currentTarget.value);
    // donc pour utiliser la fonction searchFunction on passe par le props nommé searchFunctin
    this.props.searchFunction(event.currentTarget.value);
  }

  render() {
    return (
      <input type="text" className="form-control form-search"
      onChange={this.handleUpdate}/>
    );
  }
}

export default SearchBar;
