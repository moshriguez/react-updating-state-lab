import React from 'react'

class DigitalClicker extends React.Component {
    state = {
        timesClicked: 0
    }

    increment = () => {
        this.setState(previousState => {
            return {timesClicked: previousState.timesClicked + 1}
        })
    }

    render() {
        return <button onClick={this.increment}>{this.state.timesClicked}</button>
    }
}

export default DigitalClicker