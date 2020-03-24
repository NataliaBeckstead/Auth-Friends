import React from 'react';

import { axiosWithAuth } from '../utils/axiosWithAuth';

class Login extends React.Component {
  state = {
    credentials: {
      username: '',
      password: ''
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    axiosWithAuth()
      .post('/api/login', this.state.credentials)
      .then(res => {
        console.log(res);
        localStorage.setItem('token', JSON.stringify(res.data.payload));
        this.props.history.push('/protected');
      })
      .catch(err => console.log(err.response));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.login}>
            <label htmlFor="username">Username: </label>
            <input
                type="text"
                id="username"
                name="username"
                value={this.state.credentials.username}
                onChange={this.handleChange}
            /><br></br>
            <label htmlFor="password">Password: </label>
            <input
                type="password"
                id="password"
                name="password"
                value={this.state.credentials.password}
                onChange={this.handleChange}
            /><br></br>
            <button>Log in</button>
        </form>
      </div>
    );
  }
}

export default Login;