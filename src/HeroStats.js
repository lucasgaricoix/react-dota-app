import React from 'react'
import { Table } from 'react-bootstrap'

class HeroStats extends React.Component {
    constructor () {
        super()
        this.state = {
            heroData: [],
            singleHeroData: [],
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

        fetch(`https://api.opendota.com/api/heroes`)
        .then(results => { return results.json() })
            .then((data) => {
                this.setState({
                    singleHeroData: data.filter(
                        (filtered => {
                            return filtered.id === parseInt(this.props.match.params.heroid)
                    })
                )
            })
        })
    }

    heroRoles = (role) => {
        var roles = '';        
        for (var i = 0; i < role.length; i++) {
            if (i === role.length-1) {                
                roles = roles + role[i]
            } else {
                roles = roles + role[i] + ' - '
            }
        }
        return roles
    }

    heroPrimaryAttr = (attr) => {
        if (attr === 'str') {
            return 'Strenght'
        } else if (attr === 'agi') {
            return 'Agillity'
        } else if (attr === 'int') {
            return 'Intellect'
        }
    }
    
    render() {        
        return (
            <div className='main-herostats'>                                                 
                {this.state.heroData.map(                    
                    ((repo, index)=> {                            
                        return (
                            <div key={index}>
                                <img src={`https://api.opendota.com${repo.img}`} alt='hero' style={{borderRadius: 5}}/>
                                <div style={{fontSize: 48}}>{repo.localized_name}</div>
                                <div>Primary Attribute:  {this.state.singleHeroData.map(rep => {return this.heroPrimaryAttr(rep.primary_attr)})}</div>
                                <div style={{textTransform: "uppercase"}}>{this.heroRoles(repo.roles)}</div>                                
                                <hr />
                                <div style={{fontSize: 24}}>
                                    <img src={`https://api.opendota.com${repo.icon}`} alt='icon' /> Hero stats detail
                                </div>
                                <br />
                                <Table striped bordered condensed>                                
                                    <tbody>
                                        <tr>
                                            <td><span>HP: </span> <span>{repo.base_health}</span></td>
                                            <td><span>Strength: </span> <span>{repo.base_str}</span></td>
                                            <td><span>Attack range: </span> <span>{repo.attack_range}</span></td>
                                        </tr>
                                        <tr>
                                            <td><span>HP Regen: </span> <span>{repo.base_health_regen}</span></td>
                                            <td><span>Agillity: </span> <span>{repo.base_agi}</span></td>
                                            <td><span>Attack rate: </span> <span>{repo.attack_rate}</span></td>
                                        </tr>
                                        <tr>
                                            <td><span>MP: </span> <span>{repo.base_mana}</span></td>
                                            <td><span>Intellect: </span> <span>{repo.base_int}</span></td>
                                            <td><span>Attack type: </span> <span>{repo.attack_type}</span></td>
                                        </tr>
                                        <tr>
                                            <td><span>MP Regen: </span> <span>{repo.base_mana_regen}</span></td>
                                            <td><span>Base Armor: </span> <span>{repo.base_armor}</span></td>
                                            <td><span>Move Speed: </span> <span>{repo.move_speed}</span></td>
                                        </tr>          
                                    </tbody>                              
                                </Table>
                            </div>
                        )
                    })
                )}
                
            </div>
        )
    }
}

export default HeroStats