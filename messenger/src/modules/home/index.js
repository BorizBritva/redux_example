import React from 'react';
import Header from '../header.js';
import { Link } from 'react-router-dom';
import fone from '../../assest/home_logo.png';

export default class Home extends React.Component {

    render() {
        return (
            <div className="homePage">
                <div className="container">
                    <div className="homeContent">
                        <div className="homeContent__logo">
                            <img src={fone} alt="fone" />
                        </div>
                        <h1 className="homeContent__title">fendar.io</h1>
                        <p className="homeContent__desc">help people get to know each other!</p>
                        <div className="buttonWrap">
                            <Link className="homeContent__button" to="/users">START NOW</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

};
