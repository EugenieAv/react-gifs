import React, { Component } from 'react';

class Gif extends Component {
  handleClick = (event) => {
    if (this.props.selectGif) {
      this.props.selectGif(this.props.id);
      // console.log(this.props.id)
    }
  }


  render() {
    const src = `https://media1.giphy.com/media/${this.props.id}/giphy.gif`;
    return(
      <div className="gif">
        <img src={src} alt=""
        onClick={this.handleClick} />
      </div>
    )
  }
}

export default Gif;

// du coup ici on un composant qui est reutilisable
// https://media.giphy.com/media/I7p8K5EY9w9dC/giphy.gif
