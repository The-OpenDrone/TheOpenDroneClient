import React, { Component } from 'react'
import Banner from './components/Banner'
import BriefAbout from './components/BriefAbout'
import Header from './components/Header'

export default class App extends Component {
        render() {
                return (
                        <div className="App">
                                <Header />
                                <Banner />
                                <BriefAbout />
                        </div>
                )
        }
}
