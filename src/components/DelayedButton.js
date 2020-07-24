import React, { Component } from 'react'

class DelayedButton extends Component {

    handleOnClick = event => {
        event.persist();
        setTimeout(() => {
          this.props.onDelayedClick(event);
        }, this.props.delay);
      };

    render() {
        return (
            <div>
                <button onClick={this.handleOnClick}></button>
            </div>
        )
    }
}

export default DelayedButton