import React from 'react';

const AddPlayerForm = ({ areTeamsGenerated, onPlayerNameChange, onAddClick, onGenerateTeamsClick, onResetClick }) => {
    return(
        <form className="ui form">
            <div className="ui action input field">
                <input type="text" placeholder="Enter a player name" onChange={(event) => onPlayerNameChange(event.target.value)} />
                <button className="ui teal labeled icon button" type="button" onClick={onAddClick}>
                    <i className="user icon"></i>
                    Add
                </button>
            </div>
            <div className="ui field">
                <button className="ui green button" type="button" onClick={onGenerateTeamsClick}>{((areTeamsGenerated) ? 'Re-generate' : 'Generate') + ' Teams'}</button>
                <button className="ui red button" type="button" onClick={onResetClick}>Reset</button>
            </div>
        </form>
    );
};

export default AddPlayerForm;
