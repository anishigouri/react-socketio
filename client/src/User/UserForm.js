import React, { Component } from 'react';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:8080');

class UserList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {}
        };
    }

    onSave() {
        console.log(this.state);
        socket.emit('user', this.state.user);
    }

    onChangeName(state, event) {
        this.state.user.name = this.inputName.value;
        this.setState(this.state);
    }

    onChangeEmail(state, event) {
        this.state.user.email = this.inputEmail.value;
        this.setState(this.state);
    }

    render() {
        return (
            <div>
                <div className="">
                    Form
                </div>
                <div className="col-md-6">
                    <div className="form-group" >
                        <label>Name:</label>
                        <input 
                            className="form-control" 
                            onChange={this.onChangeName.bind(this, 'name')} 
                            ref={(input) => {this.inputName = input;}}
                        />
                    </div>
                    <div className="form-group" >
                        <label>E-mail:</label>
                        <input 
                            className="form-control" 
                            onChange={this.onChangeEmail.bind(this, 'email')}
                            ref={(input) => {this.inputEmail = input;}}
                        />
                    </div>
                </div>
                <hr />
                <button 
                    className="btn btn-success"
                    onClick={this.onSave.bind(this)}>
                    Save
                </button>
            </div>
        );
    }
}

export default UserList;