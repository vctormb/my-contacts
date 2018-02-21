import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import RegisterUserForm from './RegisterUserForm';

class RegisterUser extends Component {
    handleSubmit = (values) => {
        const { dispatch } = this.props;

        alert(JSON.stringify(values, null, 2));

        dispatch({
            type: 'ADD_USER_REQUEST',
            push: this.props.history.push
        });
    }

    render() {
        return (
            <div>
                <RegisterUserForm onSubmit={this.handleSubmit} />
                <br />
                <span><Link to="/users">Back to users list</Link></span>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        usersReducer: state.users
    }
}

export default connect(mapStateToProps)(RegisterUser);