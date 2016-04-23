import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { updatePlayerName, addPlayer, generateTeams, reset } from '../../actionCreators';

import AddPlayerForm from './AddPlayerForm';

function mapStateToProps(state) {
    return {
        areTeamsGenerated: (state.teamGenerator.teams !== undefined && (state.teamGenerator.teams[0].length > 0 || state.teamGenerator.teams[1].length > 0))
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
        },

        onResetClick: () => {
            dispatch(reset());
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPlayerForm);
