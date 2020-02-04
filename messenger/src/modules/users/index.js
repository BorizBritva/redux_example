import React from 'react';
import { Link } from 'react-router-dom';
import UsersList from '../../containers/usersList';

export default class Users extends React.Component {
    render() {
        return(
            <div className="container">
                <h1 className="pageName">Top-picked authors:</h1>
                <UsersList />
            </div>
        )
    }
}
