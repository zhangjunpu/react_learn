import React, { PureComponent } from 'react';

export default class App extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            username: ""
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={e => this.submitInfo(e)}>
                    <label htmlFor="username">
                        用户名：
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={this.state.username}
                            onChange={e => this.handleChange(e)} />
                    </label>

                    <input type="submit" value="提交" />
                </form>
            </div>
        )
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    submitInfo(event) {
        event.preventDefault();
        console.log(this.state.username);
    }
}
