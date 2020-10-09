import React, { Component } from 'react'

class ProfileHeader extends Component {
    render() {
        const { name, age, height } = this.props
        return (
            <div>
                <div>姓名：{name}</div>
                <div>年龄：{age}</div>
                <div>身高：{height}</div>
            </div>
        )
    }
}

class Prifile extends Component {
    render() {
        return (
            <div>
                <ProfileHeader {...this.props} />
            </div>
        )
    }
}

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            name: "Junpu",
            age: 18,
            height: 1.88
        }
    }
    render() {
        const { name, age, height } = this.state
        return (
            <div>
                {/* <Prifile name={name} age={age} height={height} /> */}
                <Prifile {...this.state} />
            </div>
        )
    }
}
