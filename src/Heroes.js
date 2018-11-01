import React from 'react'
import { Link } from 'react-router-dom'

class Heroes extends React.Component {
    constructor () {
        super()
        this.state = {
            heroes: []
        }
    }
    
    componentDidMount () {
        fetch(`https://api.opendota.com/api/heroStats`)
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
                                    <Link to={`/heroes/${repo.id}`}>
                                        <img alt='Hero' 
                                            src={`https://api.opendota.com${repo.img}`} 
                                            style={{width: 150}}
                                        />
                                    </Link>                                    
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