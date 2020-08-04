import React from 'react';
import ArtistDetail from './ArtistDetail';
import Artist from './Artist';

class ArtistList extends React.Component{
    state ={
        artists: []
    }

    componentDidMount() {
        this.setState({
            artists: ArtistDetail
        })
    }

render(){

    const artists = this.state.artists.map( artist => (
        <Artist 
        key = {artist.id}
        id = {artist.id}
        name = {artist.name}
        votes = {artist.votes}
        imageUrl = {artist.imageUrl}
        clubUrl = {artist.clubUrl}
        />
    ));

    return (
        <div className="ui unstackable items">
            {artists}
        </div>
    )
}
}

export default ArtistList