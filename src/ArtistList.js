import React from 'react';
import ArtistDetail from './ArtistDetail';
import Artist from './Artist';

class ArtistList extends React.Component{
    state ={
        sortType: '',
        artists: []
    }

    componentDidMount() {
        this.setState({
            artists: ArtistDetail
        })
    }


    //Vote handler
    voteHandler = (artistId) => {
        const voteArtist = this.state.artists.map(artist => {
            if(artistId === artist.id) {
                return Object.assign({}, artist, {
                    votes: artist.votes + 1
                })
            }
            else {
                return artist
            }
        })
        this.setState({
            artists: voteArtist
        })
    }

    voteHandlerDown = (artistId) => {
        const voteArtist = this.state.artists.map(artist => {
            if(artistId === artist.id) {
                return Object.assign({}, artist, {
                    votes: artist.votes - 1
                })
            }
            else {
                return artist
            }
        })
        this.setState({
            artists: voteArtist
        })
    }

render(){

    //sort artists with highest votes
    const {artistname, sortType} = this.state;

    const sortedArtist = this.state.artists.sort((a,b) => {
        // if(b.votes === a.votes){
        //     const namesSorted = this.state.artists.sort((a,b) => {
        //     const isReversed = (sortType === 'asc') ? 1 : -1;
        //     return isReversed * a.name.localeCompare(b.name);
        //     }
        // },
        return b.votes - a.votes;
        
    })

   

    // sort artist using name
    // const namesSorted = this.state.artists.sort((a,b) => {
    //     const isReversed = (sortType === 'asc') ? 1 : -1;
    //     return isReversed * a.name.localeCompare(b.name)
    // })

    const artists = this.state.artists.map( artist => (
        <Artist 
        key = {artist.id}
        id = {artist.id}
        name = {artist.name}
        votes = {artist.votes}
        imageUrl = {artist.imageUrl}
        clubUrl = {artist.clubUrl}
        voteArtist = {this.voteHandler}
        voteArtistDown = {this.voteHandlerDown}
        />
    ));

    return (
        <div className="ui divided unstackable items">
            {artists}
        </div>
    )
}
}

export default ArtistList