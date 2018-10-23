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
      account_id: '83952806',
      players: { personaname: '', mmr_estimate: '', rank_tier: '', solo_competitive_rank: '', avatar: '' },
      wl: { win: '', lose: ''},
      recentMatches: [],
      heroes: [],
      hero_name: '',
      heroi: '',
      activeKey: 1
    }
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
