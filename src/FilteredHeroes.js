import React from 'react'
import ReactTooltip from 'react-tooltip'

const FilteredHeroes = ( {hero_id, heroes} ) => {
    const filterHero = heroes.filter(
        (filterHero) => {
            return filterHero.id === hero_id.hero_id
        }    
    )

    return (
        <div>
            {filterHero.map(
                (mapHero, index) => {
                    return (
                        <div key={index}>
                            <img src={`https://api.opendota.com${mapHero.img}`} alt='hero' style={{width: 100}} data-for='getContent' data-tip={mapHero.localized_name} />
                            <ReactTooltip place="bottom" type="dark" effect="solid"
                                id='getContent' 
                                getContent={(dataTip) => <div>{dataTip}</div>}
                            />
                        </div>
                    )
                }
            )}
        </div>
    )    
}

export default FilteredHeroes