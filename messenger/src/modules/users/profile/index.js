import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {store} from '../../../store/store';
import initialState from '../../../store/initialState';
import addUserPost from '../../../actions/addUserPost';
import closeModal from '../../../actions/closeModal';
import createCommentsList from '../../../actions/createCommentList';
import ProfileCard from './profileCard';
import PostsCard from '../../feed/postCard';
import Modal from '../../modal/modal';

const mapStateToProps = (state = initialState) => {
    return {
        userPost: state.userPost,
        modal: state.modal,
        modalStatus: state.modalStatus
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addUserPost: bindActionCreators(addUserPost, dispatch),
        createCommentsList: bindActionCreators(createCommentsList, dispatch),
        closeModal: bindActionCreators(closeModal, dispatch)
    }
}

class Profile extends React.Component {

    componentDidMount() {

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
                    <li className="postsList__point" key={index} id={item.id} onClick={() => this.props.createCommentsList(item.id)}>
                        <PostsCard data={item} userId={userId} userName={`@${user}`}/>
                    </li>
                    )
                })
            }
    }

    render() {

        return(
            <>
                <div className="container">
                    {this.showProfile()}
                    <h1 className="feedPageName">Latest Posts</h1>
                    <ul>
                        {this.showList()}
                    </ul>
                </div>
                <Modal  active={this.props.modalStatus}
                        username={this.props.modal.username}
                        title={this.props.modal.title}
                        body={this.props.modal.body}
                        comments={this.props.modal.comments}
                        closeModal={this.props.closeModal}
                        onClick={this.props.closeModal}
                />
            </>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
