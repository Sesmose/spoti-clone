import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import Player from './Player';
import { getTokenUrl } from './spotify';
import {useDataLayerValue} from './DataLayer'
import SpotifyWebApi from 'spotify-web-api-js';

// Récupération service spotify
const spotify = new SpotifyWebApi();

function App() {

  const [token, setToken] =  useState(null)

  const [{user}, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenUrl();
    window.location.hash = "";

    const _token = hash.access_token;
    
    //Si token alors on récupére le compte spotify
      if (_token) {
        setToken(_token);

        spotify.setAccessToken(_token);

        spotify.getMe().then(user => {
        })

        dispatch({
          type: 'SET_USER',
          user: user
        })

        spotify.getUserPlaylists().then((playlists) =>{ dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists
        });
      });
      }


  }, [])



  return (
    <div className="App">
      {
        token ? 
       <Player spotify={spotify}/>
         :
       <Login/>
        
      }
    </div>
  );
}

export default App;
