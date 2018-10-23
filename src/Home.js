import React from 'react';
import { Table } from 'react-bootstrap';
import './App.css';
import FilteredHeroes from './FilteredHeroes';
import Moment from 'react-moment';
//import _ from 'lodash'

class Home extends React.Component {
    constructor () {
        super()
        this.state = {
            account_id: '83952806',
            players: { personaname: '', mmr_estimate: '', rank_tier: '', solo_competitive_rank: '', avatar: '' },
            wl: { win: '', lose: ''},
            recentMatches: [],
            heroes: []
        }
    }

    componentWillMount() {    
        fetch(`https://api.opendota.com/api/players/${this.state.account_id}`)
        .then(results => {return results.json(); }).then((data) => {      
            this.setState ({
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

        fetch(`https://api.opendota.com/api/players/${this.state.account_id}/wl`)
        .then(results => { return results.json(); })
        .then((data) => {
            this.setState ({
                wl: {
                    win: data.win,
                    lose: data.lose
                }
            })
        })        

        fetch(`https://api.opendota.com/api/players/${this.state.account_id}/recentMatches`)
        .then(results => {
        return results.json()
        }).then((data) => {
            this.setState ({           
                recentMatches: data.map((repo) => {                
                    return {
                        match_id: repo.match_id,
                        radiant_win: repo.radiant_win,
                        kills: repo.kills,
                        assists: repo.assists,
                        deaths: repo.deaths,
                        duration: repo.duration,
                        game_mode: repo.game_mode,
                        gold_per_min: repo.gold_per_min,
                        xp_per_min: repo.xp_per_min,
                        hero_damage: repo.hero_damage,
                        hero_healing: repo.hero_healing,
                        hero_id: repo.hero_id,
                        skill: repo.skill
                    }
                })
            })
        })       

        fetch(`https://api.opendota.com/api/heroStats`) //https://api.opendota.com/apps/dota2/images/heroes/
        .then(results => { return results.json() })
        .then((data) => {
            this.setState({
                heroes: data.map((repo) => {
                    return {
                        id: repo.id,
                        name: repo.name,
                        localized_name: repo.localized_name,
                        img: repo.img,
                        icon: repo.icon
                    }          
                })
            })
        })        
    }

    render() {        
        return (
            <div className='home'>
                <div className='player'>
                    <div>
                        <img alt='Profile avatar' className='avatar-photo' src={this.state.players.avatar} />
                        <div>Name: {this.state.players.personaname}</div>
                    </div>
                    <div>Win: {this.state.wl.win} | Lose: {this.state.wl.lose} </div>
                    <div>Estimated MMR: {this.state.players.mmr_estimate}</div>
                    <div>Rank Tier: {this.state.players.rank_tier}</div>
                    <div>Solo Competitive: {this.state.players.solo_competitive_rank}</div>
                    
                    <div>Profile Url: <a href={this.state.players.profileurl}> {this.state.players.profileurl} </a></div>
                </div>
                <br/>

                <div>
                    
                </div>
                
                <div style={{fontSize: 17}}><p>Recent Matches</p></div>
                <div>
                    {this.state.recentMatches.map((repo) => {                        
                        return (
                            <div key={repo.match_id}>
                            <Table style={{width: 900}} striped bordered condensed hover> 
                                <thead>
                                    <tr>
                                    <th>HERO</th>
                                    <th >RESULT</th>
                                    <th >GAME MODE</th>
                                    <th >DURATION</th>
                                    <th >GPM</th>
                                    <th >XPM</th>
                                    <th >KILL</th>
                                    <th >DEATHS</th>
                                    <th >ASSISTS</th>
                                    </tr>                                
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <FilteredHeroes hero_id={repo} heroes={this.state.heroes} />
                                        </td>
                                        <td>
                                            <div>{repo.radiant_win ? 'Radiant win' : 'Dire win'}</div>
                                        </td>
                                        <td>
                                            <div>{repo.game_mode}</div>
                                            <div>{repo.skill}</div>
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
                                        </td>
                                        <td>
                                            <div>{repo.deaths}</div>
                                        </td>
                                        <td>
                                            <div>{repo.assists}</div>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                            </div>
                        ) 
                    })} 
                </div>
            </div>
        )
    }    
}


export default Home