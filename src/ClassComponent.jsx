import React from 'react'

class ClassComponent extends React.Component {

    state = {
        counter: 0,
        // if I click, will become 1
        name: 'Stefano'
    }

    // the state is READ-ONLY
    // if you want to CHANGE it, you'll have to use setState

    render() {
        return (
            <div>
                <button className="btn" onClick={() => this.setState({ counter: this.state.counter + 1 })}>INCREASE COUNT</button>
                <button onClick={() => this.setState({ counter: this.state.counter - 1 })}>DECREASE COUNT</button>
                <button onClick={() => this.setState({ name: 'Mihai' })}>CHANGE NAME</button>
                <h1>Hello {this.state.name}, the counter is {this.state.counter}</h1>
            </div>
        )
        // this is pointing to the current instance of the class
    }
}

// const ClassComponent = () => <h1>Hello</h1>
// the same thing as this

export default ClassComponent