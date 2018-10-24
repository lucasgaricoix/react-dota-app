import React, { Component } from 'react';
import './App.css';
import Home from './Home'
import Header from './Header'
import Heroes from './Heroes'
import { Switch, Route } from 'react-router-dom'
import { withRouter } from 'react-router'

class App extends Component {
  constructor () {
    super()
    this.state = {
      activeKey: 1
    }
  }

  componentDidMount() {
    this.setState({ isFatching: false })
  }

  render() {
    return (
      <div className='App'>
        <Header activeKey={this.state.activeKey} />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/heroes' component={Heroes} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
