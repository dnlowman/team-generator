import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { updatePlayerName, addPlayer, generateTeams, reset } from '../../actionCreators';

import AddPlayerForm from './AddPlayerForm';

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

export default connect(null, mapDispatchToProps)(AddPlayerForm);
