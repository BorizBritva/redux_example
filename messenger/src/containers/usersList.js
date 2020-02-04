import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import createUsersList from '../actions/createUsersList';
import UsersCard from '../modules/users/usersCard';
import {store} from '../store/store';
import initialState from '../store/initialState';
import addUserPost from '../actions/addUserPost';

const mapStateToProps = (state = initialState) => {
    return {
        users: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createUsersList: bindActionCreators(createUsersList, dispatch),
        addUserPost: bindActionCreators(addUserPost, dispatch)
    }
}

class UsersList extends React.Component {

    componentDidMount() {
        this.props.createUsersList();
    }

    showList() {

        return this.props.users.map((item) => {
            return(
                <li key={item.id} className="peoplesList__point" >
                    <UsersCard data={item} />
                </li>
            )
        })
    }

    render() {

        return(
            <ul className="peoplesList">
                {this.showList()}
            </ul>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersList)
