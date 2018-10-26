import React, { Component } from 'react'
import './App.css'
import MatchHistory from './Match'
import Header from './Header'
import Heroes from './Heroes'
import Login from './Login.jsx'
import { Switch, Route } from 'react-router-dom'
import { withRouter } from 'react-router'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      activeKey: 1,
      players: {
        personaname: '',
        mmr_estimate: '',
        rank_tier: '',
        solo_competitive_rank: '',
        avatar: ''
      },
      wl: { win: '', lose: '' },
      recentMatches: [],
      heroes: [],
      account_id: '83952806'
    }
  }

  onLogin = () => {
    this.setState({
      isLoggedIn: true
    })
  }

  onLogout = () => {
    this.setState(
      { isLoggedIn: undefined }, () => {
        this.state.history.push('/')
      }
    )
  }

  render () {
    const { isLoggedIn } = this.state
    return (
      <div className='App'>
        <Header
          isLoggedIn={isLoggedIn}
          onLogin={this.onLogin}
          onLogout={this.onLogout}
        />
        <Switch>
          <Route exact path='/'  render={props => (
              <Login {...props} 
                account_id={this.state.account_id}
                onLogin={this.onLogin}              
              />
            )}/>
          <Route
            path='/match' exact
            render={props => (
              <MatchHistory
                {...props}
                isLoggedIn={isLoggedIn}
                account_id={this.state.account_id}
                players={this.state.players}
                wl={this.state.wl}
                recentMatches={this.state.recentMatches}
                skill={this.state.skill}
                heroes={this.state.heroes}
              />
            )}
          />
          <Route
            path='/heroes' exact
            render={props => (
              <Heroes {...props} account_id={this.state.account_id} />
            )}
          />
        </Switch>
      </div>
    )
  }
}

export default withRouter(App)
