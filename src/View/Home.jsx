import React from 'react'

function Home() {
    return (
        <div>
            <video  autoPlay className="header-video" loop>
            <source src={require('../Assets/hype.mp4')} type="video/mp4"/>
                <source src="movie.ogg" type="video/ogg"/></video>
        </div>
    )
}

export default Home
