import React from 'react'
import {
  Button
} from 'react-bootstrap'

const Login = ({ onLogin }) => {
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
          <Button bsStyle="primary" style={{marginBottom: 20, borderRadius: 5}} >Get your steam ID</Button>
        </a>
      </div>

      <div>
          <input placeholder='Paste yout SteamID' style={{
              textAlign: 'center',
              width: '25%',
              fontSize: 25,
              borderRadius: 5,
              marginBottom: 20
              }} 
            />
      </div>

      <div>
        <a href='/match'>
          <Button
            bsStyle='success'
            bsSize='large'
            className='btn-welcome'
            style={{ height: 50 }}
            onClick={onLogin}
          >
            Start
          </Button>
        </a>

      </div>

    </div>
  )
}

export default Login
