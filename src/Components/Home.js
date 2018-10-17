import React, { Component } from 'react';
import '../Stylesheets/Home.css';

class Home extends Component {
    render() {
        const {
            handleAddFace
        } = this.props;
        return (
            <div>
                <header onClick={handleAddFace} className="home__header">
                    <p className="home__add">+</p>
                </header>
            </div>
        );
    }
}

export default Home;