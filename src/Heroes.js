import React from 'react'
import _ from 'lodash'

class Heroes extends React.Component {
    constructor () {
        super()
        this.state = {
            heroes: []
        }
    }

    componentDidMount () {
        fetch(`https://api.opendota.com/api/heroStats`) //https://api.opendota.com/apps/dota2/images/heroes/
        .then(results => {
        return results.json()
        }).then((data) => {
        // console.log('heroes', data)
        //let [tmp] = _.filter(data, { id: 1 })
        //console.log('heroStats', tmp)

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

    render () {
        return (
            <div>
                <div>Heroes:</div>
                <hr/>
                <div className='heroes'>
                    {this.state.heroes.map((repo, index) => {
                        return (
                        <div key={index} className='hero-list' >
                            <div>{repo.localized_name}</div>
                            <div><img src={`https://api.opendota.com${repo.img}`} style={{width: 100}} /></div>
                        </div>                  
                        )
                    })}
                </div>               
            </div>
        )
    }
    
}

export default Heroes