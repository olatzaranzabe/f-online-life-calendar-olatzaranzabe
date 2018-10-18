import React, { Component } from 'react';
import '../Stylesheets/Home.css';
import { Link } from 'react-router-dom';
import Faces from './Faces';

class Home extends Component {
    render() {
        const {
            handleAddFace
        } = this.props;
        return (
            <div>
                <Link to='/editor'>
                    <header onClick={handleAddFace} className="home__header">
                        <p className="home__add">+</p>
                    </header>
                </Link>
                <div className="home__faces">
                    <Faces />
                </div>
            </div>
        );
    }
}

export default Home;