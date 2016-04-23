import React, { Component } from 'react';
import { connect } from 'react-redux';

import TeamGeneratorContainer from './TeamGeneratorContainer';

const HomeView = (props) => {
    return (
        <div className="ui padded grid">
            <div className="ui four wide column">
                <TeamGeneratorContainer />
            </div>
        </div>
    );
};

export default HomeView;
