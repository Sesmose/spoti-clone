import React from 'react';
import SideBar from './Sidebar';
import Body from './Body';
import Footer from './Footer';
import './Player.css'

function Player(spotify) {
    return (
        <div className="player">
            <div className="player-body">
            <SideBar/>
            <Body spotify={spotify}y/>
            </div>
            <Footer/>
        </div>
    )
}

export default Player
