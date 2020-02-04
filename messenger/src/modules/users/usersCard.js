import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import lineBottom from '../../assest/carts-bottom.png';

export default class UsersCard extends React.Component {
    render() {
        return(
            <Link className="peoplesCart" to={`/users/Id${this.props.data.id}`}>
                <div className="peoplesCart__ava" style={{backgroundColor: `rgba(${this.props.data.backColor})`}}>
                    {this.props.data.shortName}
                </div>
                <div className="peoplesCart__name">{this.props.data.name}</div>
                <div className="peoplesCart__site">{this.props.data.website}</div>
                <div className="peoplesCart__line">
                    <img alt="lineBottom" className="lineBottom" src={lineBottom} alt="lineBottom"/>
                </div>
            </Link>
        )
    }
}
