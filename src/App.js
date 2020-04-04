import React, { Component } from 'react';
import {API_URL, API_KEY} from './config';
import axios from 'axios';
import { Header } from "./components";
import { Home } from './routes';
import './App.css';

class App extends Component {
  state = {
    loading: false,
    movies: [
      {
        backdrop_path: './images/Fast_large.jpg',
        id: 475557,
        overview:
          "Dans les années 1980, à Gotham City, Arthur Fleck, un humoriste de stand-up raté, bascule dans la folie et devient le Joker.",
        poster_path: './images/Fast_small.jpg',
        title: "Joker"
      },
      {
        backdrop_path: './images/Fast_large.jpg',
        id: 475558,
        overview:
          "Dans les années 1980, à Gotham City, Arthur Fleck, un humoriste de stand-up raté, bascule dans la folie et devient le Joker.",
        poster_path: './images/Fast_small.jpg',
        title: "Joker"
      },
      {
        backdrop_path: './images/Fast_large.jpg',
        id: 475559,
        overview:
          "Dans les années 1980, à Gotham City, Arthur Fleck, un humoriste de stand-up raté, bascule dans la folie et devient le Joker.",
        poster_path: './images/Fast_small.jpg',
        title: "Joker"
      },
      {
        backdrop_path: './images/Fast_large.jpg',
        id: 475560,
        overview:
          "Dans les années 1980, à Gotham City, Arthur Fleck, un humoriste de stand-up raté, bascule dans la folie et devient le Joker.",
        poster_path: './images/Fast_small.jpg',
        title: "Joker"
      }
    ],
    badge: 0,
    image: './images/Fast_large.jpg',
    mTitle: 'Fast and Furious',
    mDesc: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
    activePage: 0,
    totalPages: 0,
    searchText: ''
  }
  async componentDidMount(){
    try {
      const res = await this.loadMovies();
    } catch (e) {
      console.log('error', e);
    }
  }
  loadMovies = () => {
    const page = this.state.activePage + 1;
    const url = `${API_URL}/movie/popular?api_key=${API_KEY}&page=${page}&language=fr`;
    return axios.get(url);
  }
  handleSearch = value => {
    //lancer la recherche ici
    console.log('handleSearch', value);
  }
  loadMore = () => {
    //lancer une requete ici
    console.log('load More');
  }
  render() {
    return (
      <div className="App">
        <Header badge={this.state.badge} />
        <Home
          {...this.state}
          onSearchClick={this.handleSearch}
          onButtonClick={this.loadMore}
        />
      </div>
    );
  }
}

export default App;
