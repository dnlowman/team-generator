import React from 'react';

const TeamCard = ({ players }) => {
    return (
        <div className="card">
            <div className="content">
                <div className="header">Team:</div>
                <div className="description">
                    <ul>
                        <li>
                            {players}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default TeamCard;
