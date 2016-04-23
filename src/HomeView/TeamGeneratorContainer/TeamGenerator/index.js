import React from 'react';

import AddPlayerFormContainer from './AddPlayerFormContainer';
import PlayerCardContainer from './PlayerCardContainer';
import TeamCard from './TeamCard';

import './style.scss';

const TeamGenerator = ({ players, teams, onPlayerNameChange, onAddClick, onGenerateTeamsClick }) => {
    let playersList = players.map((player, idx) => <PlayerCardContainer key={idx} playerId={idx} />);

    let teamA = teams[0];
    let teamB = teams[1];

    let teamACard = teamA.length > 0 ? <TeamCard players={teamA} /> : '';
    let teamBCard = teamB.length > 0 ? <TeamCard players={teamB} /> : '';

    let playersRow = '';
    if(teamA.length === 0 || teamB.length === 0) {
        playersRow = (<div className="ui row">
                          <div className="ui column">
                              <div className="ui cards">
                                  {playersList}
                              </div>
                          </div>
                      </div>);
    }

    return (
        <div className="ui grid">
            <div className="ui row">
                <div className="ui column">
                    <AddPlayerFormContainer />
                </div>
            </div>
            {playersRow}
            <div className="ui row">
                <div className="ui column">
                    <div className="ui cards">
                        {teamACard}
                        {teamBCard}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamGenerator;
