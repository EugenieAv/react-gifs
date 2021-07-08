import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: ""
    };

    // this.search("disney");
  }

  selectGif = (id) => {
    this.setState({
      selectedGifId: id
    });
  }

  search = (query) => {
    // TODO: API
    giphy('WITh9dtwvHFI3jbp2Ugay3qvgQysQqEB').search({
      q: query,
      rating: 'g',
      limit: 10
    }, (err, result) => {
          this.setState({
            gifs: result.data
          })
        }
    );
  }

  render() {
    // on a besoin de passer de la data à GifList, on lui donne un array d'id
       // QD ON COMMENCE VOULOIR AUTOMATISER ON ENLEVE LA const gifs PR LE STATE
    // const gifs = [
    //   { id: "I7p8K5EY9w9dC" },        // on ne lui passe pas des id directement
    //   { id: "RfHRclnWCpgMKym6wH" }    // mais un object contenant des ids
    // ];


    return(
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          {/*<GifList gifs={gifs} />*/}
          <GifList gifs={this.state.gifs} selectGif={this.selectGif} />
        </div>
      </div>
    );
  }
}


export default App;
