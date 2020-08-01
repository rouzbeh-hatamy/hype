import React from 'react'
import './ContactStyle.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare,faLinkedin,faFacebookSquare } from '@fortawesome/free-brands-svg-icons'



function Contact() {
    return (
        <div>
            <div className="containerr">
                <div className="card">
                    <div className="face face1">
                        <div className="content">
                            <div className="icon">
                                <FontAwesomeIcon icon={faGithubSquare} size="10x" inverse className="faicon" />
                            </div>
                        </div>
                    </div>
                    <div className="face face2">
                        <div className="content">
                            <h3>
                                <a href="https://github.com/rouzbeh-hatamy">rouzbeh-hatamy</a>
                            </h3>
                            <p>This is where I share code and work on projects.</p>

                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="face face1">
                        <div className="content">
                            <div className="icon">
                            <FontAwesomeIcon icon={faFacebookSquare} size="10x" inverse className="faicon" />
                            </div>
                        </div>
                    </div>
                    <div className="face face2">
                        <div className="content">
                            <h3>
                                <a href="https://www.facebook.com/roozbeh.hatamy/" >rouzbeh.hatamy</a>
                            </h3>
                            <p>This is where I read news and network with different social groups.</p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="face face1">
                        <div className="content">
                            <div className="icon">
                            <FontAwesomeIcon icon={faLinkedin} size="10x" inverse className="faicon" />
                            </div>
                        </div>
                    </div>
                    <div className="face face2">
                        <div className="content">
                            <h3>
                                <a href="https://www.linkedin.com/in/rouzbeh-hatamy-zargaran-531b54171/" >rouzbeh-hatamy-zargaran</a>
                            </h3>
                            <p>This is where I network and build my professional protfolio.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
