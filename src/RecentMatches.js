import React from 'react'

const RecentMatches = ( {recentMatches} ) => {
    return (
        <div>
            {recentMatches.map((repo) => {
            return (              
                <div key={repo.match_id}>
                {repo.radiant_win}
                <div>KDA: {repo.kills}/{repo.deaths}/{repo.assists}</div>       
                <div>Match Duration: {repo.duration}</div>
                <div>Game Mode: {repo.game_mode} Skill: {repo.skill} </div>            
                <div>GPM: {repo.gold_per_min}</div>
                <div>XPM: {repo.xp_per_min}</div>
                <div>Hero damage: {repo.hero_damage}</div>
                <div>Healing done: {repo.hero_healing}</div>
                <div>Hero ID: {repo.hero_id} | Hero Name: 
                </div>                
                <hr />
                </div>
            )
            })}
        </div>
    )
}

export default RecentMatches