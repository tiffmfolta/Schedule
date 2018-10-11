import React, { Component } from 'react';
import Icon from './icon';

class Action extends Component {
    handleAction = function(){
        this.props.onClick()

        //document.getElementbyID('action').classList.add('')
    }.bind(this);

    render() {
        return (
            <a
            id='action'
            onClick={() => this.handleAction()} 
            className={`${this.props.className} action`}>
                { Icon('fas fa-plus-circle') }
                {/* fas fa-times-circle */}
            </a>
        )
    }
}

export default Action;