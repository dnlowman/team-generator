import React from 'react';

const TeamGenerator = ({ players, teams, onPlayerNameChange, onAddClick, onGenerateTeamsClick }) => {
    let playersList = players.map(player => <li key={player}>{player}</li>);

    let teamA = teams[0] || [];
    let teamB = teams[1] || [];

    let teamAList = teamA.map(teamMember => <li key={teamMember}>{teamMember}</li>);
    let teamBList = teamB.map(teamMember => <li key={teamMember}>{teamMember}</li>);

    return (
        <div>
            <form className="ui form">
                <div className="ui action input field">
                    <input type="text" placeholder="Enter a player name" onChange={(event) => onPlayerNameChange(event.target.value)} />
                    <button className="ui teal labeled icon button" type="button" onClick={onAddClick}>
                        <i className="user icon"></i>
                        Add
                    </button>
                </div>
                <button className="ui green button" type="button" onClick={onGenerateTeamsClick}>Generate Teams</button>
                <button className="ui red button" type="button" onClick={onGenerateTeamsClick}>Reset</button>
            </form>
            <ul>
                {playersList}
            </ul>
            <div>
                <h3>Team A:</h3>
                <ul>
                    {teamAList}
                </ul>
                <h3>Team B:</h3>
                <ul>
                    {teamBList}
                </ul>
            </div>
        </div>
    );
};

export default TeamGenerator;
