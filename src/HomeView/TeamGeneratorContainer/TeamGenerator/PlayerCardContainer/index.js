import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { removePlayer } from '../../actionCreators';

import PlayerCard from './PlayerCard';

function mapStateToProps(state, ownProps) {
    return {
        playerId: ownProps.playerId,
        name: state.teamGenerator.players[ownProps.playerId]
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onRemoveClick: (playerId) => {
            dispatch(removePlayer(playerId));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerCard);
