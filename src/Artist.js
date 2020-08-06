import React from "react";

const Artist = (props) => {
  return (
    <div className="item">
      <div>
        <img
          src={props.imageUrl}
          alt={props.name}
          className="ui medium circular image"
        />
      </div>
      <div className="middle aligned content">
        <div className="description">
          <a>
            <i
              className="large up caret icon"
              onClick={props.voteArtist.bind(this, props.id)}
            />

            {props.votes}

            <i
              className="large down caret icon"
              onClick={props.voteArtistDown.bind(this, props.id)}
            />
          </a>
          <p>{props.name}</p>
        </div>
      </div>
    </div>
  );
};

export default Artist;
