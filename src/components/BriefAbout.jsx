//! Core
import React from 'react'

//! Custom
import '../styles/BriefAbout/BriefAbout.css'

const BriefAbout = () => {
        return (
                <div className="brief_about__wrapper">
                        <div className="brief_about">        
                                <div className="heading">
                                        <h1>Open Drone</h1>
                                </div>
                                <div className="about">
                                        is an open-source framework to provide makers around the world with the resources to create their own delivery drones to safely provide essential supplies to those in need.
                                </div>
                        </div>
                </div>
        )
}

export default BriefAbout
