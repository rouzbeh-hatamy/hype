import React from 'react';
import './Home.scss'

function Home() {
    return (
        <div className="Home-div">
            <video autoPlay className="video" loop>
                <source src={require('../../Assets/hype.mp4')} type="video/mp4" />
                <source src="movie.ogg" type="video/ogg" /></video>
            <div className="wrapper">
                <div className="carde">
                    <img src={require('../../Assets/type3.png')} alt="" />
                    <div className="descriptions">
                        <h3>Extra Low Calorie</h3>
                        <p>
                            With only 9 calories and 20% of the sugar, Hype Energy Enlite gives you lighter way to get the same maximum energy boost. GREAT TASTING CARBONATED ENERGY DRINK WITH SUGAR AND SWEETENERS, CAFFEINE, TAURINE AND VITAMINS.
                        </p>
                        <button>

                            Shop Now
                </button>
                    </div>
                </div>
                <div className="carde">
                    <img src={require('../../Assets/type2.png')} alt="" />

                    <div className="descriptions">
                        <h1>Sugar Free</h1>
                        <p>

                            No sugar. No calories. No compromises. MFP Sugar Free is the same great MFP taste with no sugar added. The sleek white carbon fiber design will keep you energized without weighing you down. Sometimes, less really is more.                </p>
                        <button>

                            Shop Now
                </button>
                    </div>
                </div>
                <div className="carde">
                    <img src={require('../../Assets/type4.png')} alt="" />
                    <div className="descriptions">
                        <h3>Cherry Punch</h3>
                        <p>
                            A unique blend of natural juice and caffeine to give you a delicious tasting Cherry Twist! Caffeine, taurine and B vitamins help provide an energetic Cherry Twist!
                </p>
                        <button>

                            Shop Now
                </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home
