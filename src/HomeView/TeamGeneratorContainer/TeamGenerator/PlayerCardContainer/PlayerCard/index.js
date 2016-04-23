import React from 'react';

const PlayerCard = ({ playerId, name, onRemoveClick }) => {
    return (
        <div className="card">
            <div className="content">
                <div className="header">{name}</div>
            </div>
            <div className="ui bottom attached red button" onClick={() => onRemoveClick(playerId)}>
                <i className="minus icon"></i>
                Remove
            </div>
        </div>
    );
};

export default PlayerCard;
