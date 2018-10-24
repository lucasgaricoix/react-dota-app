import React from 'react'
import { Route } from 'react-router-dom'
import HeroStats from './HeroStats'
//import ReactTooltip from 'react-tooltip'

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
                heroes: data
                })
            })        
    }

    render () {      
        return (
            <div className='main-heroes'>
                <div style={{fontSize: 18, fontWeight: 'bold'}}>Heroes</div>
                <hr/>
                <div className='heroes'>
                    {this.state.heroes.map((repo, index) => {
                        return (
                            <div key={index} className='hero-list' >
                                <div>{repo.localized_name}</div>
                                <div>
                                    <a href={`/heroes/${repo.id}`}>                                    
                                        <img alt='Hero' 
                                            src={`https://api.opendota.com${repo.img}`} 
                                            style={{width: 150}}
                                        />
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