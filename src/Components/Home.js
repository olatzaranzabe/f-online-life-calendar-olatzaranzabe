import React, { Component } from 'react';
import '../Stylesheets/Home.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <header onClick={this.handleAddFace} className="home__header">
                    <p className="home__add">+</p>
                </header>
            </div>
        );
    }
}

export default Home;