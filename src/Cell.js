import React from 'react'

class Cell extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            color: props.value
        }
    }

    render() {
        return <div className="cell" style={{backgroundColor: this.state.color}} onClick={() => this.setState({color: '#333'})}></div>
    }
}

Cell.defaultProp = {
    color: '#fff'
}

export default Cell