import React from 'react'

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
                    return <div key={index}><img src={`https://api.opendota.com${mapHero.img}`} alt='hero' style={{width: 100}} /></div>
                }
            )}
        </div>
    )    
}

export default FilteredHeroes