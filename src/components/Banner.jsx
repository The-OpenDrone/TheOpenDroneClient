//! Core
import React, { Component } from 'react'

//! Custom
import '../styles/Banner/Banner.css'
import makingOf from '../videos/open-drone-making.mov'

class Banner extends Component {
        constructor(props) {
                super(props)
                this.state = {
                        playing: true,
                }

                this.refVideo = React.createRef(null)
        }

        showPauseButton = event => {
                event.target.style.display = "block"
        }

        render() {
                const { playing } = this.state
                return (
                        <div className="banner_wrapper">
                                {
                                        !playing
                                        ? <div className="play_button" onClick={null}>
                                                <i className="fas fa-play"></i>
                                        </div>
                                        : <div className="pause_button " onMouseEnter={this.showPauseButton} style={ playing ? {display: 'none'} : {display: 'block'} }>
                                                <i className="fas fa-pause"></i>
                                        </div>
                                }
                                
                                <div className="banner__video_overlay"> </div>
                                <div className="banner__video_wrapper">
                                        <video width="100%" muted loop autoPlay ref={this.refVideo}>
                                                <source src={makingOf} type="video/mp4"/>
                                        </video>
                                </div>
                        </div>
                )
        }
}

export default Banner
