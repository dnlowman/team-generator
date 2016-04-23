import React from 'react';

const TeamCard = ({ players }) => {
    let playerList = players.map((player, idx) => <li key={idx}>{player}</li>);

    return (
        <div className="card">
            <div className="content">
                <div className="header">Team:</div>
                <div className="description">
                    <ul>
                        {playerList}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default TeamCard;
