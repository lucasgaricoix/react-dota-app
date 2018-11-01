import React from 'react'

class HeroStats extends React.Component {
    constructor () {
        super()
        this.state = {
            heroData: [],
            heroID: 0
        }
    }
    
    componentDidMount() {
        fetch(`https://api.opendota.com/api/heroStats`)
        .then(results => { return results.json() })
        .then((data) => {
            this.setState({                
                heroData: data.filter(
                    (filtered => {
                        return filtered.id === parseInt(this.props.match.params.heroid)
                    })
                )
            })
        })
    }
    
    render() {        
        return (
            <div >
                {this.state.heroData.map(                    
                    (repo => {                            
                        return (
                            <div>
                                <img src={`https://api.opendota.com${repo.img}`} alt='hero'/>
                                <div>{repo.localized_name}</div>
                                <div>Roles: {repo.roles}</div>

                                <div>HP: {repo.base_health} | Regen: {repo.base_health_regen}</div>
                                <div>MP: {repo.base_mana} | Regen: {repo.base_mana_regen}</div>

                                <div>Strength: {repo.base_str}</div>
                                <div>Agillity: {repo.base_agi}</div>
                                <div>Intellect: {repo.base_int}</div>

                                <div>Attack range: {repo.attack_range}</div>
                                <div>Attack rate: {repo.attack_rate}</div>
                                <div>Attack type: {repo.attack_type}</div>

                                <div>Base Armor: {repo.base_armor}</div>
                                <div>Move Speed: {repo.move_speed}</div>
                            </div>
                        )
                    })
                )}
            </div>
        )
    }
}

export default HeroStats