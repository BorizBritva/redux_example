import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assest/logo.svg';
import initialState from '../store//initialState';
import createUsersList from '../actions/createUsersList';
import store from '../store/store';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const mapStateToProps = (state = initialState) => {
    return {
        userPost: state.userPost
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createUsersList: bindActionCreators(createUsersList, dispatch),
    }
}

class Header extends React.Component {

    componentDidMount() {
        this.props.createUsersList();
    }

    render() {
        return(
            <header>
                <div className="container">
                    <div className="headerWrap">
                        <Link className="logoFone" to="/"><img alt="logo-img" className="logo" src={logo} alt="logo"/></Link>
                        <ul className="navList">
                            <li className="navList__item">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="navList__item">
                                <Link to="/users">People</Link>
                            </li>
                            <li className="navList__item" onClick={this.props.createUsersList}>
                                <Link to="/feed">Feed</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
