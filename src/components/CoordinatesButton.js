import React, { Component } from 'react'

class CoordinatesButton extends Component {

   handleOnClick = (event) => {
       let arr = [event.clientX, event.clientY]
        this.props.onReceiveCoordinates(arr)
   }

    render() {
        return (
            <div>
                <button onClick={this.handleOnClick}></button>
            </div>
        )
    }
}

export default CoordinatesButton