import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PostList from '../../containers/postsList';

export default class Feed extends React.Component {
    render() {
        return(
            <div className="container">
                <h1 className="feedPageName">Latest Posts</h1>
                <PostList />
            </div>
        )
    }
}
