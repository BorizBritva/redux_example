import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

export default class PostsCard extends React.Component {
    render() {
        return(
            <div className="postsCart">
                <div className="title__block">
                    <Link  className="postsCart__username" to={`/users/Id${this.props.userId}`}>{this.props.userName}</Link >
                    <span className="postsCart__title">{this.props.data.title}</span>
                </div>
                <div className="postsCart__body">{this.props.data.body}</div>
            </div>
        )
    }
}
