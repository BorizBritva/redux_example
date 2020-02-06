import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PostList from '../../containers/postsList';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import initialState from '../../store/initialState';
import createCommentsList from '../../actions/createCommentList';
import closeModal from '../../actions/closeModal';
import Modal from '../modal/modal';

const mapStateToProps = (state = initialState) => {
    return {
        modal: state.modal,
        modalStatus: state.modalStatus
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createCommentsList: bindActionCreators(createCommentsList, dispatch),
        closeModal: bindActionCreators(closeModal, dispatch),
    }
}

class Feed extends React.Component {

    render() {

        return(
            <>
                <div className="container">
                    <h1 className="feedPageName" onClick={() => {console.log(this.props)}}>Latest Posts</h1>
                    <PostList />
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

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
