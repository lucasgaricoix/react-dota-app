import React, { Component } from 'react'
import './App.css'
import MatchHistory from './Match'
import Header from './Header.js'
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
      currentID: undefined
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

  onChangeSearchText = (event) => {
    this.setState({ text: event.target.value })
  }


  handleSelect(selectedKey) {
    this.setState({activeKey: selectedKey});
  } 


  render () {
    const { isLoggedIn, account_id } = this.state
    return (
      <div className='App'>
        <Header
          isLoggedIn={isLoggedIn}
          onLogin={this.onLogin}
          onLogout={this.onLogout}
          hero_id={this.hero_id}          
          onChangeSearchText={this.onChangeSearchText}
          text={this.state.text}
          handleSelect={this.handleSelect}
          activeKey={this.state.activeKey}
        />
        <Switch>
          <Route exact path='/'  render={props => (
              <Login {...props} 
                account_id={account_id}
                onLogin={this.onLogin}
              />
            )}/>
          <Route
            path='/match/:id'
            render={props => (
              <MatchHistory
                {...props}
                isLoggedIn={isLoggedIn}
                account_id={account_id}
                players={this.state.players}
                wl={this.state.wl}
                recentMatches={this.state.recentMatches}
                skill={this.state.skill}
                heroes={this.state.heroes}
              />
            )}
          />
          <Route
            path='/heroes'
            render={props => (
              <Heroes {...props} account_id={account_id} />
            )}
          />
        </Switch>
      </div>
    )
  }
}

export default withRouter(App)
