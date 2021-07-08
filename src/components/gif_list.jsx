import React, { Component } from 'react';
import Gif from './gif.jsx';

class GifList extends Component {

  renderList = () => {
    // return this.props.gifs.map(gif => {
    //         return <Gif id={gif.id} key={gif.id} />
    //       })
    // on peut faire la refacto avec le return implicite ds le cas de single ligne
    // console.log(this.props.gifs);
    return this.props.gifs.map(gif => <Gif id={gif.id} key={gif.id} selectGif={this.props.selectGif} />)
  }


  render(){
    // this.props.gifs.map(gif => {
    //   return (
    //     <div>
    //       <Gif id={gif.id} />       on ne pas mettre le return
    //     </div>                      dans une iteration ???
    //   );
    // });
    return(
      <div className="gif-list">
{/*     {
          this.props.gifs.map(gif => {
            return <Gif id={gif.id} key={gif.id} />
          })
        }
*/}
        {this.renderList()}
      </div>
      );


    // return(
    //   <Gif id = "12313"/>, <Gif id = "42542" />
    // );
  }
}

export default GifList;

/// this.props.gifs est un array que l'on a defini dans son parent App
