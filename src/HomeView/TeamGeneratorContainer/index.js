import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import { updatePlayerName, addPlayer, generateTeams } from './actionCreators';

import TeamGenerator from './TeamGenerator';

function mapStateToProps(state) {
    return {
        players: state.teamGenerator.players,
        teams: state.teamGenerator.teams
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onPlayerNameChange: (name) => {
            dispatch(updatePlayerName(name));
        },

        onAddClick: () => {
            dispatch(addPlayer());
        },

        onGenerateTeamsClick: () => {
            dispatch(generateTeams());
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TeamGenerator);
