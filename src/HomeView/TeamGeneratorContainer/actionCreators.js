import * as constants from './constants';

export function addPlayer() {
    return {
        type: constants.ADD_PLAYER
    };
}

export function generateTeams() {
    return (dispatch, getState) => {
        let players = getState().teamGenerator.players.slice(0);

        let teamSize = players.length / 2;
        let teamA = [];
        let teamB = [];

        // Shuffle teams
        for (var i = players.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = players[i];
            players[i] = players[j];
            players[j] = temp;
        }

        teamA = players.slice(0, teamSize);
        teamB = players.slice(teamSize, players.length);

        dispatch({
            type: constants.GENERATE_TEAMS,
            payload: {
                teamA,
                teamB
            }
        });
    };
}

export function updatePlayerName(name) {
    return {
        type: constants.UPDATE_PLAYER_NAME,
        payload: {
            name
        }
    };
}

export function removePlayer(playerId) {
    return {
        type: constants.REMOVE_PLAYER,
        payload: {
            playerId
        }
    }
}

export function reset() {
    return {
        type: constants.RESET
    }
}
