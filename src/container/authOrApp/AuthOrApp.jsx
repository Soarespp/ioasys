import React, { Component } from 'react';
import { connect } from 'react-redux';
import Home from '../../view/home/Home';
import Login from '../../view/login/Login';
import NewHome from '../../view/newHome/newHome';

class AuthOrApp extends Component {
    render() {
        const { user, validToken } = this.props.auth;
        if (!user && !validToken) {
            return <Login />
        } else {
            return <Home />
        }
    }
}

const mapStateToProps = state => ({ auth: state.auth })

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthOrApp)