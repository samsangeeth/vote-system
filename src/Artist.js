import React from 'react';

const Artist = (props) => {
    return(
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
                        <i className="large up caret icon" />
                    </a>
                </div>
            </div>
            {props.name}
        </div>
    )
}

export default Artist;