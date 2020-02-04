import React from 'react';
import bigLine from '../../../assest/bigLine.png';

export default class ProfileCard extends React.Component {
    render() {
        return(
            <div className="profileCard">
                <div className="peoplesCart__ava" style={{backgroundColor: `rgba(${this.props.data.backColor})`}}>
                    {this.props.data.shorname}
                </div>
                <div className="profileCard__dataWrap">
                    <div className="profileCard__site">{this.props.data.link}</div>
                    <div className="profileCard__name">{this.props.data.name}</div>
                    <div className="profileCard__site">{this.props.data.website}</div>
                </div>
                <div className="profilesCart__line">
                </div>
            </div>
        )
    }
}
