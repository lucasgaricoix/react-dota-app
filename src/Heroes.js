import React from 'react'
import { Route } from 'react-router-dom'
import HeroStats from './HeroStats'

class Heroes extends React.Component {
    constructor () {
        super()
        this.state = {
            heroes: [],
            heroID: 0
        }
    }
    
    componentWillMount () {
        fetch(`https://api.opendota.com/api/heroStats`) //https://api.opendota.com/apps/dota2/images/heroes/
        .then(results => { return results.json() })
        .then((data) => {
            this.setState({
                heroes: data.map((repo) => {
                    return {
                        id: repo.id,
                        localized_name: repo.localized_name,
                        img: repo.img,
                        icon: repo.icon,
                        proWin: repo.proWin,
                        proBan: repo.proBan,

                    }          
                })
            })
        })
    }

    render () {
        return (
            <div className='main-heroes'>
                <div style={{fontSize: 17, fontWeight: 'bold'}}>Heroes</div>
                <hr/>
                <div className='heroes'>
                    {this.state.heroes.map((repo, index) => {
                        return (
                        <div key={index} className='hero-list' >
                            <div>{repo.localized_name}</div>
                            <div>
                                <a href={`/heroes/${repo.id}`}>
                                    <img alt='Hero' src={`https://api.opendota.com${repo.img}`} style={{width: 100}} />
                                </a>
                                
                                <Route exact path={`/heroes/${repo.id}`} 
                                render={props => <HeroStats {...props} id={repo} heroes={this.state.heroes} />} 
                                />
                            </div>
                        </div>                  
                        )
                    })}
                </div>              
            </div>
        )
    }
    
}

export default Heroes