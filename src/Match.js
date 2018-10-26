import React from 'react'
import { Table } from 'react-bootstrap'
import './App.css'
import FilteredHeroes from './FilteredHeroes'
import GameMode from './GameMode'
import constantgamemode from '../src/constants/ConstantGameMode.json'

class MatchHistory extends React.Component {
  constructor () {
    super()
    this.state = {
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
      constantgamemode: constantgamemode,
      gameModeInfo: [],
      isFatching: true
    }
  }

  componentWillMount () {

    fetch(`https://api.opendota.com/api/players/${this.props.account_id}`)
      .then(results => {
        return results.json()
      })
      .then(data => {
        this.setState({
          players: {
            personaname: data.profile.personaname,
            mmr_estimate: data.mmr_estimate.estimate,
            rank_tier: data.rank_tier,
            solo_competitive_rank: data.solo_competitive_rank,
            avatar: data.profile.avatarfull,
            profileurl: data.profile.profileurl
          }
        })
      })
      .catch(error => this.setState({ error }))

    fetch(`https://api.opendota.com/api/players/${this.props.account_id}/wl`)
      .then(results => {
        return results.json()
      })
      .then(data => {
        this.setState({
          wl: {
            win: data.win,
            lose: data.lose,
            winRate: parseFloat(
              data.win / (data.win + data.lose) * 100
            ).toFixed(2) + '%'
          }
        })
      })

    fetch(
      `https://api.opendota.com/api/players/${this.props.account_id}/recentMatches`
    )
      .then(results => {
        return results.json()
      })
      .then(data => {
        this.setState({
          recentMatches: data.sort((a, b) => a.match_id > b.match_id)
        })

        data.map(rep => {
          if (rep.skill === 1) {
            return this.setState({ skill: 'Normal' })
          } else if (rep.skill === 2) {
            return this.setState({ skill: 'High' })
          } else return this.setState({ skill: 'Very High' })
        })
      })

    fetch(`https://api.opendota.com/api/heroStats`) // https://api.opendota.com/apps/dota2/images/heroes/
      .then(results => {
        return results.json()
      })
      .then(data => {
        this.setState({
          heroes: data
        })
      })
  }

  render () {
    const { isFatching } = true;
    return (
      <div className='home'>
        <div className='player'>
          <div className='playerInfo'>
            <img
              alt='Profile avatar'
              className='avatar-photo'
              src={this.state.players.avatar}
            />
            <div
              className='personname'
              style={{ fontWeight: 'bolder', fontSize: 28 }}
            >
              {this.state.players.personaname}
            </div>
            <div className='wins'>
              <span style={{ color: 'black' }}>Wins</span>
              {' '}
              <div>{this.state.wl.win}</div>
            </div>
            <div className='losses'>
              <span style={{ color: 'black' }}>Losses</span>
              <div>{this.state.wl.lose}</div>
            </div>
            <div className='winrate'>
              <span>Winrate</span>
              {!isFatching && <div>{this.state.wl.winRate}</div>}
            </div>
          </div>
          <div>Estimated MMR {this.state.players.mmr_estimate}</div>
          <div>Solo Competitive {this.state.players.solo_competitive_rank}</div>
          <div>Rank Tier {this.state.players.rank_tier}</div>

          <div>
            Profile Url
            {' '}
            <a
              target='_blank'
              rel='noopener noreferrer'
              href={this.state.players.profileurl}
            >
              {' '}{this.state.players.profileurl}{' '}
            </a>
          </div>
        </div>
        <br />

        <div style={{ fontSize: 18, fontWeight: 'bold' }}>
          <p>Recent Matches</p>
        </div>
        <Table style={{ width: 900 }} responsive hover>
          <thead>
            <tr>
              <th>HERO</th>
              <th>RESULT</th>
              <th>GAME MODE</th>
              <th>DURATION</th>
              <th>GPM</th>
              <th>XPM</th>
              <th>KILL</th>
              <th>DEATHS</th>
              <th>ASSISTS</th>
            </tr>
          </thead>
          {this.state.recentMatches.map(repo => {
            return (
              <tbody key={repo.match_id}>
                <tr>
                  <td>
                    <FilteredHeroes hero_id={repo} heroes={this.state.heroes} />
                  </td>
                  <td>
                    <div>{repo.radiant_win ? 'Radiant win' : 'Dire win'}</div>
                  </td>
                  <td>
                    <div>
                      <GameMode gameid={repo} constant={constantgamemode} />
                    </div>
                    <div>{this.state.skill}</div>
                  </td>
                  <td>
                    <div>{repo.duration}</div>
                  </td>
                  <td>
                    <div>{repo.gold_per_min}</div>
                  </td>
                  <td>
                    <div>{repo.xp_per_min}</div>
                  </td>
                  <td>
                    <div>{repo.kills}</div>
                    <div
                      className='killrate'
                      style={{
                        width: repo.kills /
                          (repo.kills + repo.deaths + repo.assists) *
                          100 +
                          '%'
                      }}
                    >
                      {' '}
                    </div>
                    <div
                      className='deathrate'
                      style={{
                        width: repo.deaths /
                          (repo.kills + repo.deaths + repo.assists) *
                          100 +
                          '%'
                      }}
                    >
                      {' '}
                    </div>
                    <div
                      className='assistrate'
                      style={{
                        width: repo.assists /
                          (repo.kills + repo.deaths + repo.assists) *
                          100 +
                          '%'
                      }}
                    >
                      {' '}
                    </div>
                  </td>
                  <td>
                    <div>{repo.deaths}</div>
                  </td>
                  <td>
                    <div>{repo.assists}</div>
                  </td>
                </tr>
              </tbody>
            )
          })}
        </Table>
      </div>
    )
  }
}

export default MatchHistory
