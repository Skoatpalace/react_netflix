import React, {Component} from 'react';
import {HeaderImg, Searchbar, PosterList, LoadButton} from '../components'; 

class Home extends Component {
    render(){
      const {mTitle, mDesc, image, movies, loading} = this.props;
        return (
            <div>
                <HeaderImg 
                imgSrc={image}
                title={mTitle}
                overview={mDesc}
                />
                <Searchbar onSearchClick={this.props.onSearchClick}/>
                <PosterList movies={movies}/>
                <LoadButton onButtonClick={this.props.onButtonClick} loading={loading}/>
            </div>
        )
    }
}

export { Home };