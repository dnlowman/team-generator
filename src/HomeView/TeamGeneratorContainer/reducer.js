import { combineReducers } from 'redux';

import * as constants from './constants';

const initialState = {
    addPlayerForm: {
        name: ''
    },
    players: [],
    teams: []
};

export default function(state = initialState, action) {
    switch(action.type) {
        case constants.UPDATE_PLAYER_NAME: {
            return Object.assign({}, state, {
                addPlayerForm: Object.assign({}, state.addPlayerForm, {
                    name: action.payload.name
                })
            });
        }

        case constants.ADD_PLAYER: {
            let players = state.players.slice(0);
            players.push(state.addPlayerForm.name);

            return Object.assign({}, state, {
                players
            });
        }

        case constants.GENERATE_TEAMS: {
            let teams = [];
            teams.push(action.payload.teamA);
            teams.push(action.payload.teamB);

            return Object.assign({}, state, {
                teams: teams
            });
        }

        default: {
            return state;
        }
    }
}
