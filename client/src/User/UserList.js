import React, { Component } from 'react';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:8080');

class UserList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
    }

    componentDidMount() {
        console.log('emitou um socket');
        socket.on('users', (user) => {
            console.log('escutando', user);
            this.state.users.push(user);
            this.setState(this.state);
        });
    }

    render() {
        return (
            <div>
                <div>
                    Lista de usuários
                </div>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.map((user) => 
                                <tr>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                </tr>        
                            )
                        }
                    
                    </tbody>
                </table>
            </div>
        );
    }
}

export default UserList;