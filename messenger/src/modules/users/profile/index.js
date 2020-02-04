import React from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {store} from '../../../store/store';
import initialState from '../../../store/initialState';
import addUserPost from '../../../actions/addUserPost';
import ProfileCard from './profileCard';
import PostsCard from '../../feed/postCard';

const mapStateToProps = (state = initialState) => {
    return {
        userPost: state.userPost
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addUserPost: bindActionCreators(addUserPost, dispatch),
    }
}

class Profile extends React.Component {

    componentWillMount() {

        this.props.addUserPost(this.props.match.params.id);
    }

    showProfile() {
        if (this.props.userPost.length) {
            return (
                <ProfileCard data={this.props.userPost[0]} />
            )
        }
    }

    showList() {

        if (this.props.userPost.length) {

            const user = this.props.userPost[0].username.toLowerCase();
            const userId = this.props.userPost[0].id;

            return this.props.userPost[1].map((item, index) => {

                return(
                    <li className="postsList__point" key={index} data-posts-id={item}>
                        <PostsCard data={item} userId={userId} userName={`@${user}`}/>
                        </li>
                    )
                })
            }
    }

    render() {

        return(
            <div className="container">
                {this.showProfile()}
                <h1 className="feedPageName">Latest Posts</h1>
                <ul>
                    {this.showList()}
                </ul>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
