import React from 'react'
import {
  Button
} from 'react-bootstrap'

const Login = () => {
  return (
    <div className='login'>
      <h1 className='welcome'> {' '}Welcome to Dota Statistcs </h1>

      <div>
        <a
          href='https://steamid.xyz/'
          target='_blank'
          rel='noopener noreferrer'
          style={{marginBottom: 20, fontSize: 25}}
        >
          <Button bsStyle="success" bsSize="large" style={{borderRadius: 5}} >Get your steam32 ID</Button>          
        </a>
        <Button bsStyle="success" bsSize="large" onClick={getGenericID} style={{borderRadius: 5}} >I don't have Steam ID</Button>
      </div>      

    </div>
  )
}

export default Login
