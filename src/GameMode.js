import React from 'react'

const GameMode = ( {gameid, constant} ) => {
    const filterConstant = constant.filter(
        (filterConstant) => {
            return filterConstant[22].id === gameid.game_mode;
        }
    )


    return (
        <div>
            {filterConstant.map(                
                (mode) => {
                    return mode[22].name
                }
            )}
        </div>
    )

}

export default GameMode