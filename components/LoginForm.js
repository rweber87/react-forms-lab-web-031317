import React, {PropTypes} from 'react';

export default class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };

    this.handleEvent = this.handleEvent.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  handleEvent(field, event){
    this.setState({
      [field]: event.target.value
    })
  }
  
  handleFormSubmit(event) {
    event.preventDefault()
    const { username, password } = this.state
    if (!username || !password) { return }
    this.props.onSubmit({ username, password })
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit.bind(this)}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" value={this.state.username} onChange={this.handleEvent.bind(this, 'username')}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" value={this.state.password} onChange={this.handleEvent.bind(this, 'password')} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

LoginForm.propTypes = { onSubmit: PropTypes.func }