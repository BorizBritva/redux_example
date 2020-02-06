import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import createPostsList from '../actions/createPostsList';
import createCommentsList from '../actions/createCommentList';
import {store} from '../store/store';
import initialState from '../store/initialState';
import PostsCard from '../modules/feed/postCard';

const mapStateToProps = (state = initialState) => {
    return {
        users: state.users,
        posts: state.posts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createPostsList: bindActionCreators(createPostsList, dispatch),
        createCommentsList: bindActionCreators(createCommentsList, dispatch),
    }
}

class PostList extends React.Component {

    componentDidMount() {
        this.props.createPostsList();
    }

    showList() {
        //console.log(this.props)
        const randArr = [];
        this.props.posts.forEach(item => randArr.push(item.id));
        randArr.sort(() => Math.random() - 0.5);

        return randArr.map((item, index) => {

            let indexElem = item - 1;
            let userID = this.props.posts[indexElem].userId;
            let userName = this.props.users[userID-1].username.toLowerCase();
            let userId = this.props.users[userID-1].id;

            return(
                <li className="postsList__point" key={item} data-posts-id={item} onClick={() => this.props.createCommentsList(item)}>
                    <PostsCard data={this.props.posts[indexElem]} userId={userId} userName={`@${userName}`}/>
                </li>
            )
        })
    }

    render() {
        return(
            <ul>
                {this.showList()}
            </ul>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList)
